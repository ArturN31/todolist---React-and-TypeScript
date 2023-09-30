//initial tasks loaded into the management system
export const initialState: TaskState = {
	tasks: [
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - overdue',
			due: new Date('2023-09-01').toString(),
			tags: ['Important'],
			isCompleted: false,
			isOverdue: true,
			reminder: false,
		},
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - in progress',
			due: new Date('2023-12-01').toString(),
			tags: ['Important, Meeting'],
			isCompleted: false,
			isOverdue: false,
			reminder: false,
		},
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - completed',
			due: new Date().toString(),
			tags: ['Important, Meeting'],
			isCompleted: true,
			isOverdue: false,
			reminder: false,
		},
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - due in 3 minutes',
			due: new Date(Date.parse(new Date().toString()) + 3 * 60 * 1000).toString(),
			tags: ['Shopping'],
			isCompleted: false,
			isOverdue: false,
			reminder: false,
		},
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - due in 1 hour',
			due: new Date(Date.parse(new Date().toString()) + 1 * 60 * 60 * 1000).toString(),
			tags: ['Shopping'],
			isCompleted: false,
			isOverdue: false,
			reminder: false,
		},
		{
			id: 'id_' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2),
			content: 'Sample task - due in 2 days',
			due: new Date(Date.parse(new Date().toString()) + 48 * 60 * 60 * 1000).toString(),
			tags: ['Shopping'],
			isCompleted: false,
			isOverdue: false,
			reminder: false,
		},
	],
};
