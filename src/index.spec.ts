import { template } from '@/index';

describe('index.ts', () => {
	describe('Can export template', () => {
		test('with the following structure', () => {
			expect(template).toStrictEqual({
				text:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis, dui sit amet suscipit sagittis, dolor nisl iaculis elit, vitae hendrerit arcu sapien vitae nunc.',
			});
		});
	});
});
