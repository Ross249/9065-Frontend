import { request } from "@/lib/utils";

export const userService = {
  addressList: async (token: string) =>
    await request({
      method: "GET",
      path: `/v1/profile/addresses`,
      token: token,
    }),
  refreshToken: async (data: { refreshToken: string }) =>
    await request({
      method: "POST",
      path: "/v1/auth/refresh",
      data,
    }),
  addAddress: async (data: {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
    token: string;
  }) =>
    await request({
      method: "POST",
      path: "/v1/profile/addresses",
      data: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
        isDefault: data.isDefault,
      },
      token: data.token,
    }),
  updateAddress: async (data: {
    addressId: number;
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
    token: string;
  }) =>
    await request({
      method: "PUT",
      path: `/v1/profile/addresses/${data.addressId}`,
      data: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        country: data.country,
        isDefault: data.isDefault,
      },
      token: data.token,
    }),
  deleteAddress: async (data: { addressId: number; token: string }) =>
    await request({
      method: "DELETE",
      path: `/v1/profile/addresses/${data.addressId}`,
      token: data.token,
    }),
};