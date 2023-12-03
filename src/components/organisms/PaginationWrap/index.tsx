import { Pagination, styled } from '@mui/material';
import { FC } from 'react';

type PaginationWrapProps = {
  page: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

const StyledPagination = styled(Pagination)({
  display: 'flex',
  justifyContent: 'flex-end'
});

export const PaginationWrap: FC<PaginationWrapProps> = ({
  page,
  handleChange
}) => (
  <StyledPagination
    count={28}
    page={page}
    onChange={handleChange}
    showFirstButton
    showLastButton
  />
);
