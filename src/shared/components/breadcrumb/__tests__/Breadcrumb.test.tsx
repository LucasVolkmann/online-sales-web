import { act, render } from '@testing-library/react';

import Breadcrumb, { ListBreadcrumb } from '../Breadcrumb';
import { BreadcrumbTestIdEnum } from '../test_enum/BreadcrumbTestIdEnum.enum';

jest.mock('react-router-dom', () => ({
  useNavigate: () => MOCK_NAVIGATE_FUNCTION,
}));

const MOCK_NAVIGATE_FUNCTION = jest.fn();

const MOCK_ROUTE = 'MOCK_ROUTE';
const MOCK_HOME_PAGE_NAME = 'MOCK_HOME_PAGE_NAME';
const MOCK_FIRST_PAGE_NAME = 'MOCK_FIRST_PAGE_NAME';
const MOCK_SECOND_PAGE_NAME = 'MOCK_SECOND_PAGE_NAME';

const MOCK_LIST_BREADCRUMB: ListBreadcrumb[] = [
  {
    name: MOCK_HOME_PAGE_NAME,
  },
  {
    name: MOCK_FIRST_PAGE_NAME,
    navigateTo: MOCK_ROUTE,
  },
  {
    name: MOCK_SECOND_PAGE_NAME,
  },
];

describe('Test Breadcrumb', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render Breadcrumb component', () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={MOCK_LIST_BREADCRUMB} />);

    expect(getByTestId(BreadcrumbTestIdEnum.BREADCRUMB_ID)).toBeDefined();
  });
  it('should render all items on list', () => {
    const { getByText } = render(<Breadcrumb listBreadcrumb={MOCK_LIST_BREADCRUMB} />);

    expect(getByText(MOCK_HOME_PAGE_NAME)).toBeDefined();
    expect(getByText(MOCK_FIRST_PAGE_NAME)).toBeDefined();
    expect(getByText(MOCK_SECOND_PAGE_NAME)).toBeDefined();
  });
  it('should be <a> when [navigateTo] is defined', () => {
    const { container } = render(<Breadcrumb listBreadcrumb={MOCK_LIST_BREADCRUMB} />);

    const itemWithNavigateTo = container.querySelector('a');

    expect(itemWithNavigateTo).toBeDefined();
  });
  it('should not be <a> when [navigateTo] is not defined', () => {
    const NEW_MOCK_LIST_BREADCRUMB = [MOCK_LIST_BREADCRUMB[0], MOCK_LIST_BREADCRUMB[2]];
    const { container } = render(<Breadcrumb listBreadcrumb={NEW_MOCK_LIST_BREADCRUMB} />);

    const itemWithNavigateTo = container.querySelectorAll('a');

    expect(itemWithNavigateTo.length).toEqual(0);
  });
  it('should call [navigateTo] when <a> is clicked', () => {
    const { container } = render(<Breadcrumb listBreadcrumb={MOCK_LIST_BREADCRUMB} />);

    const itemWithNavigateTo = container.querySelectorAll('a');

    expect(MOCK_NAVIGATE_FUNCTION).not.toHaveBeenCalled();

    act(() => {
      itemWithNavigateTo[0].click();
    });

    expect(MOCK_NAVIGATE_FUNCTION).toHaveBeenCalledWith(MOCK_ROUTE);
  });
});
