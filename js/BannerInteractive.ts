const template = document.createElement('template');
template.innerHTML = `
<style>
	:host
	{

	}
</style>
<div>
	<slot></slot>
</div>
`;

class BannerInteractive extends HTMLElement
{
	debug:boolean = false;
	constructor()
	{
		super();
		this.debug = false;
	}
	attributeChangeCallback(_attrName:string, _oldVal:string, _newVal:string)
	{

	}
	//write a funtion that sum two numbers
	

}

//Include particles.js
//vincentgarreau.com/particles.js

customElements.define('app-banner-interactive', BannerInteractive);
