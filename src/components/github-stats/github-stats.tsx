import { Component, Host, h, Prop } from '@stencil/core';
import { formatAlt } from '../../utils/utils';

@Component({
  tag: 'github-stats',
  styleUrl: 'github-stats.css',
  shadow: true,
})
export class GithubStats {
  @Prop() username: string = 'savepong';
  @Prop() theme: string = '';
  @Prop() textColor: string = '';
  @Prop() bgColor: string = '';
  @Prop() hideBorder: string = '';

  private getUrl(): string {
    return `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=true&count_private=true&theme=${this.theme}&hide_border=${this.hideBorder}&bg_color=${this.bgColor}&text_color=${this.textColor}`;
  }

  render() {
    return (
      <Host>
        <img src={this.getUrl()} alt={formatAlt('Github Stats', this.username)} width="100%" height="100%" />
      </Host>
    );
  }
}
