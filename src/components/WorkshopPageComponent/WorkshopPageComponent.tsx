// Each Entity should have its own Route path (e.g. workshop/:entityId), would be good if the entered but not submitted data is saved between pages as well.

// Each Entity preview div must be inside a <NavLink></NavLink> component, so that when user clicks on it, the change to :/entityId happens. The attribute: to={`${entityId}`} WITHOUT "/" BEFORE THE LINK!

// So, each Entity should be in a separate modal window that is rendered, when you click on the NavLink.
// And then, to render the correct Entity, we will use "useParams": consr {entityId} = useParams() and we will use that entityId for fetch.
