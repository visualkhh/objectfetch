console.log('initialize')

type Office = {
  name: string;
  address: Address;
}
type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}
type User = {
  name: string;
  address: Address[];
  office: Office;
}



