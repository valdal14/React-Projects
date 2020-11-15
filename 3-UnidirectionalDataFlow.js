// Data-Binding In Other Frameworks

// Front-end frameworks like Angular and Ember make use of two-way data bindings.
// Data is kept in sync throughout the app no matter where it is updated
// If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. 
// Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated

// REACT DATA-BINDING

// Data flows down from parent component to child component.
// Data updates are sent to the parent component where the parent performs the actual change.
// The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, both the parent and the child components can use the data.
// NOTE: However, if the data must be updated, then only the parent component should perform the update.

// If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made.
// Once the change _is_ made in the parent component, the child component will be passed the data.

// In this example the Parent FlightPlanner can make changes to the data
// <FlightPlanner>
//  <DatePicker />
//  <DestinationPicker />
// </FlightPlanner>

// In this example we a more nested example and both FlightPlanner & LocationPicker can make changes to the data

// <FlightPlanner> parent

// <LocationPicker> parent
//  <OriginPicker />
//  <DestinationPicker />
// </LocationPicker>

// <DatePicker />

// </FlightPlanner>

// In React, data flows in only one direction, from parent to child. 
// If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.