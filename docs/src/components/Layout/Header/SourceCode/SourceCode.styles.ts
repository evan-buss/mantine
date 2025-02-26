import { createStyles, INPUT_SIZES } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 140,
    height: INPUT_SIZES.sm,
    textDecoration: 'none',

    '@media (max-width: 980px)': {
      display: 'none',
    },
  },

  icon: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
    color: theme.colorScheme === 'dark' ? theme.black : theme.white,
  },
}));
