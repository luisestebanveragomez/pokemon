import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";
import "./root.css";
import microfrontendLayout from "./microfrontend-layout.html";

enum Language {
  es = "es",
  en = "en",
  storage = "language",
}

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }, import1: any = System.import(name)) {
    return import1;
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });
const lan = localStorage.getItem(Language.storage);
!lan && localStorage.setItem(Language.storage, Language.es);

applications.forEach(registerApplication);
layoutEngine.activate();
start();
