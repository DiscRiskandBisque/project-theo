import { Component, Prop, State } from '@stencil/core';
import { Store } from '@stencil/redux';

@Component({
  tag: 'drz-data'
})
export class MyComponent {
  @Prop({ context: 'store' }) store: Store;
  @Prop({ context: 'drizzle' }) drizzle: any;
 
  @State() dataKey: string;
 
  private unsubscribe: () => void;
   
  componentWillLoad() {
    console.log('Drizzle from drz-data:');
    console.log(this.drizzle);

    console.log('Store from drz-data:');
    console.log(this.store);

    this.dataKey = this.drizzle.contracts['MyStringStore'].methods['x'].cacheCall();

    this.unsubscribe = () => this.store.mapStateToProps(this, (state) => {
      const { 'contracts': { 'MyStringStore': { 'x': { dataKey } } } } = state;
      
      return {
        dataKey
      }
    });
  }
 
  componentDidUnload() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h3>Value of <code>x</code>:</h3>
        <p>{this.dataKey || 'Loading...'}</p>
      </div>
    )
  }
}