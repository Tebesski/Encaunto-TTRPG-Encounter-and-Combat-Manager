// function executeFunctionByName<T, C>(functionName: string, context: C, value: T) {
//   const args = Array.prototype.slice.call(arguments, 2);
//   const namespaces = functionName.split(".");
//   const func = namespaces.pop();
//   for(let i = 0; i < namespaces.length; i++) {
//     context = context[namespaces[i]];
//   }
//   return context[func].apply(context, args);
// }