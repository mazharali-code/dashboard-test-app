import type { Meta, StoryObj } from '@storybook/angular';
import { TaskComponent } from '../app/shared/components/task/task.component';


const meta: Meta<TaskComponent> = {
  title: 'Task Component',
  component: TaskComponent,
  argTypes: {
    task: {
      control: 'object', 
    },
  },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
    args: {
        task: {
            title: 'Upload data',
            description: 'Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.',
            imageUrl: 'assets/images/upload-data.png',
            imageAlt: 'Data upload icon',
            href: '/data-upload',
        }
    },
};