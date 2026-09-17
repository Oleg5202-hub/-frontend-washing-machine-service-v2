import { postData, getData } from "./api";

export async function createRequest({ name, phone, machine, model, desc, day, time }) {
  return await postData("/request", {
    name,
    phone,
    machine,
    model,
    desc,
    day,
    time,
  });
}

export async function getRequests() {
  return await getData("/requests");
}
