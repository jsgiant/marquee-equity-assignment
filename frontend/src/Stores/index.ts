import { createContext, useContext } from "react";
import { CompaniesAPI } from "../Companies/services/CompaniesService/index.api";
import CompaniesStore from "../Companies/stores/CompaniesStore";

const companiesStore = new CompaniesStore(new CompaniesAPI());

export const stores = {
	companiesStore,
};

export const StoreContext = createContext(stores);

export const useStores = () => {
	return useContext(StoreContext);
};
