import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { HeaderComponent } from '../../app/header/header.component';
import { ButtonComponent } from '../../app/button/button.component';

export default {
  title: 'MyComponents/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent, ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
