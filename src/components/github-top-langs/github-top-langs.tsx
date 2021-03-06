import { Component, Host, h, Prop } from '@stencil/core';
import { formatAlt } from '../../utils/utils';

@Component({
  tag: 'github-top-langs',
  styleUrl: '../github-stats/github-stats.css',
  shadow: true,
})
export class GithubTopLangs {
  @Prop() username: string = 'savepong';
  @Prop() theme: string = '';
  @Prop() textColor: string = '';
  @Prop() bgColor: string = '';
  @Prop() hideBorder: string = '';
  @Prop() layout: string = '';
  @Prop() langsCount: number = 10;

  private getUrl(): string {
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${this.username}&layout=${this.layout}&langs_count=${this.langsCount}&theme=${this.theme}&hide_border=${this.hideBorder}&bg_color=${this.bgColor}&text_color=${this.textColor}`;
  }

  render() {
    return (
      <Host>
        <img src={this.getUrl()} alt={formatAlt('Github Top Langs', this.username)} width="100%" height="100%" />
      </Host>
    );
  }
}
