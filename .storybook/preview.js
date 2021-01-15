
import AppTheme from '@/components/styled-components/AppTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <AppTheme>
      <Story />
    </AppTheme>
  ),
];