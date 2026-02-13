import type { Meta, StoryObj } from '@storybook/angular';
import { Task } from '../app/core/model/task.model';
import { TaskComponent } from '../app/shared/components/task/task.component';


const meta: Meta<Task> = {
    title: 'Components/Task',
    component: TaskComponent,
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
    args: {
        title: 'Upload data',
        description: 'Submit member and cashflow data to Hymans Robertson via our single secure data submission portal with real-time data validation.',
        imageUrl: 'assets/images/upload-data.png',
        imageAlt: 'Data upload icon',
        href: '/data-upload',
    },
};