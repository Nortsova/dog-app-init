import { Components, Theme, alpha } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 20,
      lineHeight: 1.6,
      padding: theme.spacing(1, 2),
      '&:hover, &:active': {
        boxShadow: 'none'
      }
    }),
    containedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: palette.primary.main,
      color: palette.text.primary,
      boxShadow: `3px 3px 0px 0px #000000`,
      '&:hover': {
        backgroundColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px #000000`
      },
      '&:active': {
        backgroundColor: palette.action.selected,
        boxShadow: `3px 3px 0px 0px #000000`
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.text.secondary,
      boxShadow: `3px 3px 0px 0px #000000`,
      '&:hover': {
        backgroundColor: palette.grey[100]
      },
      '&:active': {
        backgroundColor: palette.grey[300]
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      backgroundColor: 'transparent',
      fontFamily: 'Dosis, sans-serif',
      color: palette.text.secondary,
      border: `1px solid ${palette.primary.main}`,
      boxShadow: `3px 3px 0px 0px #000000`,
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: palette.action.hover,
        boxShadow: `3px 3px 0px 0px #000000`
      },
      '&:active': {
        borderColor: palette.action.selected,
        boxShadow: `3px 3px 0px 0px #000000`
      }
    }),
    outlinedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: 'transparent',
      color: palette.text.primary,
      border: `1px solid ${palette.secondary.main}`
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
