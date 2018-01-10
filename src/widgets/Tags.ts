import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';

export interface TagsProperties {
	tags?: any[];
	fetchFeed: (opts: { type: string; page: number; filter: string }) => void;
}

export class Tags extends WidgetBase<TagsProperties> {
	protected render() {
		const { tags = [] } = this.properties;
		return v('div', { classes: 'col-md-3' }, [
			v('div', { classes: 'sidebar' }, [
				v('p', ['Popular Tags']),
				v(
					'div',
					{ classes: 'tag-list' },
					tags.map((tag, index) =>
						v(
							'a',
							{
								href: '',
								onclick: (event: MouseEvent) => {
									event.preventDefault();
									this.properties.fetchFeed({ type: 'tag', page: 0, filter: tag });
								},
								key: `${index}`,
								classes: ['tag-pill', 'tag-default']
							},
							[tag]
						)
					)
				)
			])
		]);
	}
}
