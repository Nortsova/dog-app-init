import { Box, styled } from '@mui/material';

type CardItemProps = {
  variant: 'primary' | 'smallRadiusBorder' | 'bigRadiusBorder';
  borderRadius: number;
};

export const CardItem = styled(Box)<CardItemProps>(
  ({ theme, variant, borderRadius }) => ({
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    img: {
      display: 'block',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit'
    },
    maxWidth: 590,
    minHeight: 90,
    backgroundColor: theme.palette.common.white,
    cursor: variant === 'smallRadiusBorder' ? '' : 'pointer',
    boxShadow:
      variant === 'smallRadiusBorder'
        ? `3px 3px 0px 0px ${theme.palette.text.secondary}`
        : `6px 6px 0px 0px ${theme.palette.text.secondary}`,
    border:
      variant === 'smallRadiusBorder'
        ? 'unset'
        : `1px solid ${theme.palette.common.black}`,
    borderRadius: borderRadius || 20,
    '&:hover, &:active': {
      boxShadow:
        variant === 'smallRadiusBorder'
          ? `3px 3px 0px 0px ${theme.palette.text.secondary}`
          : `6px 6px 8px 0px ${theme.palette.primary.main}`
    }
  })
);
