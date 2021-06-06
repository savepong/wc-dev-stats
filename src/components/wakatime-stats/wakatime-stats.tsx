import { Component, Host, h, Prop } from '@stencil/core';
import { formatAlt } from '../../utils/utils';

@Component({
  tag: 'wakatime-stats',
  styleUrl: '../github-stats/github-stats.css',
  shadow: true,
})
export class WakatimeStats {
  @Prop() username: string = 'savepong';
  @Prop() theme: string = '';
  @Prop() textColor: string = '';
  @Prop() bgColor: string = '';
  @Prop() hideBorder: string = '';
  @Prop() layout: string = '';

  private getUrl(): string {
    return `https://github-readme-stats.vercel.app/api/wakatime?username=@${this.username}&layout=${this.layout}&theme=${this.theme}&hide_border=${this.hideBorder}&bg_color=${this.bgColor}&text_color=${this.textColor}`;
  }

  render() {
    return (
      <Host>
        <img src={this.getUrl()} alt={formatAlt('Github Wakatime Stats', this.username)} width="100%" height="100%" />
      </Host>
    );
  }
}
