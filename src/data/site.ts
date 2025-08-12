export const site = {
  name: "Auto Deals",
  city: "Daly City",
  state: "CA",
  addressLine: "999 21st Avenue",
  shortAddress: "999 21st Avenue",
  phone: "(774)436-22809",
  phoneDigits: "+1(774)436-22809",
  secondaryPhone: "(774) 436-2280",
  secondaryPhoneDigits: "+17744362280",
};

export const links = {
  tel: `tel:${site.phoneDigits}`,
  tel2: `tel:${site.secondaryPhoneDigits}`,
  maps: `https://maps.apple.com/?q=${encodeURIComponent(site.addressLine)}`,
}; 