type ProjectLinks = {
    live: string;
    repos: {
      frontend: string;
      backend?: string;
    };
  };
  
  export type ProjectDetails = {
    title: string;
    image: string;
    technologies: string[];
    description: string;
    links: ProjectLinks;
  };

  export type localeProject = {
    [locale:string]:ProjectDetails,
}

 export type ProjectType = {
    [name:string]: localeProject
  };