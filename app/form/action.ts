export async function greet(formdata: FormData) {
  const name = formdata.get("name");

  return `hello ${name} from server`;
}
