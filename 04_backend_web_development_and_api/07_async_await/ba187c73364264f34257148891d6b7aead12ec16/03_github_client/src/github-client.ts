import fetch, { FetchError, Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}


export const getReposUrl = async(nickname: string): Promise<string> => {
  // Code here
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const user = await response.json();
  
    if (user.message === "Not Found") {
      throw new Error("The user doesn't exist");
    }
  
   return user.repos_url;     
}

export const getRepos = async(url: string): Promise<string[]>  => {
  // Code here
  const response = await fetch(url);
  const repositoriesList = await response.json();

  console.log(31, repositoriesList);
  return repositoriesList;
  
}

export const printRepos = (repos: Repo[]): Repo[] =>  {
  // Code here
  for (let i = 0; i < repos.length; i++) {
    console.log(`${i+ 1} - ${repos[i].name}`);
  }

  return repos;
}


export const printRepository = (repository: Repo): void  => {
  // Code here

  console.log(repository.name);
  console.log(repository.description);
  console.log(repository.subscribers_count);
  console.log(repository.stargazers_count);
  console.log(repository.language);
  console.log(repository.url);
  
}

export const getProjectInformations = async(url: string): Promise<string> => {
  // Code here
  const response = await fetch(url);
  const dataRepository = await response.json();

  return dataRepository;
}

