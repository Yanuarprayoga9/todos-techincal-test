import { baseUrl } from "@/lib/baseUrl";
import { Todo } from "@/types";
import qs from "query-string";

const URL=`${baseUrl}/`;

interface Query {
  search?: string;
 
}

const getTodos = async (query: Query): Promise<Todo[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      search: query.search,
    },
  });
  console.log(url)

  const res = await fetch(url);

  return res.json();
};

export default getTodos;