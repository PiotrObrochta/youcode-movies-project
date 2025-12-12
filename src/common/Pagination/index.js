import {
  PaginationWrapper,
  ButtonsGroup,
  PaginationButton,
  PageInfo,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "./styled";

const Pagination = ({ page, totalPages }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <PaginationWrapper>

      <ButtonsGroup>
        <PaginationButton disabled={isFirstPage}>
          <ArrowLeftIcon className="single" />

          <div className="double">
            <ArrowLeftIcon />
            <ArrowLeftIcon />
          </div>

          <span>First</span>
        </PaginationButton>

        <PaginationButton disabled={isFirstPage}>
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
        <PaginationButton variant="primary" disabled={isLastPage}>
          <span>Next</span>
          <ArrowRightIcon className="single" />

          <div className="double">
            <ArrowRightIcon />
            <ArrowRightIcon />
          </div>

        </PaginationButton>

        <PaginationButton variant="primary" disabled={isLastPage}>
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
