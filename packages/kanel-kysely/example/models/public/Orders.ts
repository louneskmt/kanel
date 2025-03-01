// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

export type Id = number;

/** Represents the table public.orders */
export default interface OrdersTable {
  id: ColumnType<Id, Id | null, Id | null>;

  info: ColumnType<string, string, string | null>;
}

export type Orders = Selectable<OrdersTable>;

export type NewOrders = Insertable<OrdersTable>;

export type OrdersUpdate = Updateable<OrdersTable>;
