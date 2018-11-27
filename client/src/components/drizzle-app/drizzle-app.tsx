import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import MyStringStore from './../../../../build/contracts/MyStringStore.json'
import Drizzle from 'drizzle';

@Component({
  tag: 'drizzle-app',
  styleUrl: 'drizzle-app.scss'
})
export class DrizzleApp {
  @Prop({ context: 'store' }) store: Store;
  @Prop({ context: 'drizzle' }) drizzle: any;

  componentWillLoad() {
    const drizzleOptions = {
      contracts: [MyStringStore]
    }

    // TODO: Importing properly gives error that "Drizzle" is not exported.
    const drizzle = new Drizzle.Drizzle(drizzleOptions);

    // TODO: Emulate what the setStore() method is doing under the hood to
    // add drizzle to the component context.
    this.drizzle = drizzle;
    this.store.setStore(drizzle.store);
  }

  render() {
    return(
      <div>
        <h1>Drizzle + Stencil.js</h1>
        <drz-data></drz-data>
      </div>
    )
  }
}