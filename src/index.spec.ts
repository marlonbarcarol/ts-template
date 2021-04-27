import { testing } from '@/index';

describe('index.ts', () => {
	describe('Can export', () => {
		test('with hue property', () => {
			expect(testing).toBe({ hue: 'Test' });
		});
	});
});
