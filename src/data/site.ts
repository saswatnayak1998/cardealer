export const site = {
  name: "Car Deals",
  city: "Daly City",
  state: "CA",
  addressLine: "999 21st Avenue",
  shortAddress: "999 21st Avenue",
  phone: "9999999999",
  phoneDigits: "+19999999999",
};

export const links = {
  tel: `tel:${site.phoneDigits}`,
  maps: `https://maps.apple.com/?q=${encodeURIComponent(site.addressLine)}`,
}; 