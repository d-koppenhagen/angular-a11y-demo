import { type Meta, type StoryObj, applicationConfig } from '@storybook/angular';

import { AlertRegionComponent } from '../app/alert-region/alert-region.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<AlertRegionComponent> = {
  title: 'Example/AlertRegionComponent',
  component: AlertRegionComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations()
      ]
    })
  ],
  render: (args: AlertRegionComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    politeness: {
      control: 'select',
      options: ['off', 'polite', 'assertive'],
      defaultValue: 'polite'
    },
    role: {
      control: 'select',
      options: ['status', 'alert', 'marquee', 'log', 'progress', 'timer'],
      defaultValue: 'status'
    }
  },
};

export default meta;
type Story = StoryObj<AlertRegionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Status: Story = {
  args: {
    politeness: 'polite',
    role: 'status',
    title: 'New PR',
    description: 'A new PR has been opened by ...',
    timer: 500,
    duration: 30000
  },
};

export const Alert: Story = {
  args: {
    politeness: 'assertive',
    role: 'alert',
    title: 'Critical Error',
    description: 'The cluster is not reachable.',
    timer: 500,
    duration: 30000
  },
};

export const Marquee: Story = {
  args: {
    politeness: 'polite',
    role: 'marquee',
    title: 'Angular Meetup 01-2024',
    description: 'The Angular Meetup takes place from 16th January 2024 18:30h to 22:00h.',
    timer: 500,
    duration: 30000
  },
};

export const Log: Story = {
  args: {
    politeness: 'off',
    role: 'log',
    title: 'Position',
    description: 'Latitude: 52.51, Longitude 13.40',
    timer: 500,
    duration: 30000
  },
};

export const Progress: Story = {
  args: {
    politeness: 'polite',
    role: 'progress',
    title: 'Boot Progress',
    description: 'System started. User script loaded.',
    timer: 500,
    duration: 30000
  },
};

export const Timer: Story = {
  args: {
    politeness: 'polite',
    role: 'timer',
    title: 'Shutdown',
    description: 'System shuts down in ~28 seconds.',
    timer: 500,
    duration: 30000
  },
};
