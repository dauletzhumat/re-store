const { createContext } = require("react");


const {
	Provider: BookstoreServiceProvider,
	Consumer: BookstoreServiceConsumer
} = createContext();

export {
	BookstoreServiceProvider,
	BookstoreServiceConsumer
}