import {
  PaginationWrapper,
  ButtonsGroup,
  PaginationButton,
  PageInfo,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "./styled";
import { useHistory } from "react-router-dom";

const Pagination = ({ page, totalPages, basePath }) => {
  const history = useHistory();

  const goToPage = (p) => history.push(`${basePath}?page=${p}`);

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <PaginationWrapper>
      <ButtonsGroup>
        <PaginationButton
          disabled={isFirstPage}
          onClick={() => goToPage(1)}
          $doubleOnMobile
        >
          <ArrowLeftIcon className="single" />
          <div className="double">
            <ArrowLeftIcon />
            <ArrowLeftIcon />
          </div>
          <span>First</span>
        </PaginationButton>

        <PaginationButton
          disabled={isFirstPage}
          onClick={() => goToPage(page - 1)}
        >
          <ArrowLeftIcon className="single" />
          <div className="double">
            <ArrowLeftIcon />
            <ArrowLeftIcon />
          </div>
          <span>Previous</span>
        </PaginationButton>
      </ButtonsGroup>

      <PageInfo>
        Page <span>{page}</span> of <span>{totalPages}</span>
      </PageInfo>

      <ButtonsGroup>
        <PaginationButton
          $variant="primary"
          disabled={isLastPage}
          onClick={() => goToPage(page + 1)}
        >
          <span>Next</span>
          <ArrowRightIcon className="single" />
          <div className="double">
            <ArrowRightIcon />
            <ArrowRightIcon />
          </div>
        </PaginationButton>

        <PaginationButton
          $variant="primary"
          disabled={isLastPage}
          onClick={() => goToPage(totalPages)}
          $doubleOnMobile
        >
          <span>Last</span>
          <ArrowRightIcon className="single" />
          <div className="double">
            <ArrowRightIcon />
            <ArrowRightIcon />
          </div>
        </PaginationButton>
      </ButtonsGroup>
    </PaginationWrapper>
  );
};

export default Pagination;
