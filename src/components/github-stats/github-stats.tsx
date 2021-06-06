import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'github-stats',
  styleUrl: 'github-stats.css',
  shadow: true,
})
export class GithubStats {
  @Prop() username: string = 'savepong';
  @Prop() theme: string = 'gotham';
  @Prop() textColor: string = '768390FF';
  @Prop() bgColor: string = '00000000';
  @Prop() hideBorder: string = 'false';

  private getUrl(): string {
    return `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=true&count_private=true&theme=${this.theme}&hide_border=${this.hideBorder}&bg_color=${this.bgColor}&text_color=${this.textColor}`;
  }

  render() {
    return (
      <Host>
        <img src={this.getUrl()} alt={`${this.username}' github stats`} width="100%" height="100%" />
      </Host>
    );
  }
}
