import { Component, Host, h, Prop } from '@stencil/core';
import { formatAlt } from '../../utils/utils';

@Component({
  tag: 'github-streak-stats',
  styleUrl: '../github-stats/github-stats.css',
  shadow: true,
})
export class GithubStreakStats {
  @Prop() username: string = 'savepong';
  @Prop() theme: string = 'gotham';
  @Prop() textColor: string = '768390FF';
  @Prop() bgColor: string = '00000000';
  @Prop() hideBorder: string = 'false';

  private getUrl(): string {
    return `https://github-readme-streak-stats.herokuapp.com?user=${this.username}&theme=${this.theme}&hide_border=${this.hideBorder}&background=${this.bgColor}&dates=${this.textColor}`;
  }

  render() {
    return (
      <Host>
        <img src={this.getUrl()} alt={formatAlt('Github Streak Stats', this.username)} width="100%" height="100%" />
      </Host>
    );
  }
}
