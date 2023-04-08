import { getAppointmentsOfPatient } from "../services/appointment";


interface Env {
  KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  // const value = await context.env.KV.get('example');
  const apps = getAppointmentsOfPatient("test")
  return new Response("Hello, world!" + apps[0]);
}

