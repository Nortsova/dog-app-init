import { Components, Theme } from '@mui/material';

export const MuiButtonConfig: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: '3px 3px 0px 0px #000',
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
      color: palette.primary.contrastText,
      '&:hover': {
        backgroundColor: palette.action.hover
      },
      '&:active': {
        backgroundColor: palette.action.selected
      }
    }),
    containedSecondary: ({ theme: { palette } }) => ({
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      '&:hover': {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText
      },
      '&:active': {
        backgroundColor: palette.grey[300],
        color: palette.secondary.contrastText
      }
    }),
    outlinedPrimary: ({ theme: { palette } }) => ({
      color: palette.primary.main,
      boxShadow: 'none'
    }),
    outlinedSecondary: ({ theme: { palette } }) => ({
      color: palette.secondary.main,
      boxShadow: 'none'
    }),
    text: ({ theme: { palette } }) => ({
      color: palette.warning.main,
      padding: 0,
      boxShadow: 'none',
      '&:hover': {
        color: palette.primary.main,
        boxShadow: 'none'
      },
      '&:active': {
        color: palette.text.secondary,
        backgroundColor: palette.primary.main,
        boxShadow: 'none'
      }
    })
  },
  defaultProps: {
    disableRipple: true
  }
};
