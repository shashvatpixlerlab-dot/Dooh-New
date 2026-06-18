
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceImage
 * 
 */
export type DeviceImage = $Result.DefaultSelection<Prisma.$DeviceImagePayload>
/**
 * Model Advertiser
 * 
 */
export type Advertiser = $Result.DefaultSelection<Prisma.$AdvertiserPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Creative
 * 
 */
export type Creative = $Result.DefaultSelection<Prisma.$CreativePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model SlotOccupancy
 * 
 */
export type SlotOccupancy = $Result.DefaultSelection<Prisma.$SlotOccupancyPayload>
/**
 * Model BookingEvent
 * 
 */
export type BookingEvent = $Result.DefaultSelection<Prisma.$BookingEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VenueStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type VenueStatus = (typeof VenueStatus)[keyof typeof VenueStatus]


export const RevenueModel: {
  percentage: 'percentage',
  flat: 'flat'
};

export type RevenueModel = (typeof RevenueModel)[keyof typeof RevenueModel]


export const DeviceStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]


export const DeviceApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DeviceApprovalStatus = (typeof DeviceApprovalStatus)[keyof typeof DeviceApprovalStatus]


export const DeviceOrientation: {
  landscape: 'landscape',
  portrait: 'portrait'
};

export type DeviceOrientation = (typeof DeviceOrientation)[keyof typeof DeviceOrientation]


export const BookingStatus: {
  DRAFT: 'DRAFT',
  HELD: 'HELD',
  AWAITING_PAYMENT: 'AWAITING_PAYMENT',
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const ModerationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ModerationStatus = (typeof ModerationStatus)[keyof typeof ModerationStatus]


export const PaymentStatus: {
  CREATED: 'CREATED',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  SCREEN_OWNER: 'SCREEN_OWNER',
  ADVERTISER: 'ADVERTISER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type VenueStatus = $Enums.VenueStatus

export const VenueStatus: typeof $Enums.VenueStatus

export type RevenueModel = $Enums.RevenueModel

export const RevenueModel: typeof $Enums.RevenueModel

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

export type DeviceApprovalStatus = $Enums.DeviceApprovalStatus

export const DeviceApprovalStatus: typeof $Enums.DeviceApprovalStatus

export type DeviceOrientation = $Enums.DeviceOrientation

export const DeviceOrientation: typeof $Enums.DeviceOrientation

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type ModerationStatus = $Enums.ModerationStatus

export const ModerationStatus: typeof $Enums.ModerationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceImage`: Exposes CRUD operations for the **DeviceImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceImages
    * const deviceImages = await prisma.deviceImage.findMany()
    * ```
    */
  get deviceImage(): Prisma.DeviceImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advertiser`: Exposes CRUD operations for the **Advertiser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Advertisers
    * const advertisers = await prisma.advertiser.findMany()
    * ```
    */
  get advertiser(): Prisma.AdvertiserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creative`: Exposes CRUD operations for the **Creative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creatives
    * const creatives = await prisma.creative.findMany()
    * ```
    */
  get creative(): Prisma.CreativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slotOccupancy`: Exposes CRUD operations for the **SlotOccupancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlotOccupancies
    * const slotOccupancies = await prisma.slotOccupancy.findMany()
    * ```
    */
  get slotOccupancy(): Prisma.SlotOccupancyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingEvent`: Exposes CRUD operations for the **BookingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingEvents
    * const bookingEvents = await prisma.bookingEvent.findMany()
    * ```
    */
  get bookingEvent(): Prisma.BookingEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Venue: 'Venue',
    Device: 'Device',
    DeviceImage: 'DeviceImage',
    Advertiser: 'Advertiser',
    Booking: 'Booking',
    Creative: 'Creative',
    Payment: 'Payment',
    SlotOccupancy: 'SlotOccupancy',
    BookingEvent: 'BookingEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "venue" | "device" | "deviceImage" | "advertiser" | "booking" | "creative" | "payment" | "slotOccupancy" | "bookingEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceImage: {
        payload: Prisma.$DeviceImagePayload<ExtArgs>
        fields: Prisma.DeviceImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          findFirst: {
            args: Prisma.DeviceImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          findMany: {
            args: Prisma.DeviceImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>[]
          }
          create: {
            args: Prisma.DeviceImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          createMany: {
            args: Prisma.DeviceImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>[]
          }
          delete: {
            args: Prisma.DeviceImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          update: {
            args: Prisma.DeviceImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          deleteMany: {
            args: Prisma.DeviceImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>[]
          }
          upsert: {
            args: Prisma.DeviceImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceImagePayload>
          }
          aggregate: {
            args: Prisma.DeviceImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceImage>
          }
          groupBy: {
            args: Prisma.DeviceImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceImageCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceImageCountAggregateOutputType> | number
          }
        }
      }
      Advertiser: {
        payload: Prisma.$AdvertiserPayload<ExtArgs>
        fields: Prisma.AdvertiserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvertiserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvertiserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findFirst: {
            args: Prisma.AdvertiserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvertiserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          findMany: {
            args: Prisma.AdvertiserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          create: {
            args: Prisma.AdvertiserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          createMany: {
            args: Prisma.AdvertiserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvertiserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          delete: {
            args: Prisma.AdvertiserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          update: {
            args: Prisma.AdvertiserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          deleteMany: {
            args: Prisma.AdvertiserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvertiserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvertiserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>[]
          }
          upsert: {
            args: Prisma.AdvertiserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvertiserPayload>
          }
          aggregate: {
            args: Prisma.AdvertiserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvertiser>
          }
          groupBy: {
            args: Prisma.AdvertiserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvertiserCountArgs<ExtArgs>
            result: $Utils.Optional<AdvertiserCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Creative: {
        payload: Prisma.$CreativePayload<ExtArgs>
        fields: Prisma.CreativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          findFirst: {
            args: Prisma.CreativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          findMany: {
            args: Prisma.CreativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          create: {
            args: Prisma.CreativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          createMany: {
            args: Prisma.CreativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          delete: {
            args: Prisma.CreativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          update: {
            args: Prisma.CreativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          deleteMany: {
            args: Prisma.CreativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>[]
          }
          upsert: {
            args: Prisma.CreativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreativePayload>
          }
          aggregate: {
            args: Prisma.CreativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreative>
          }
          groupBy: {
            args: Prisma.CreativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreativeCountArgs<ExtArgs>
            result: $Utils.Optional<CreativeCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      SlotOccupancy: {
        payload: Prisma.$SlotOccupancyPayload<ExtArgs>
        fields: Prisma.SlotOccupancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotOccupancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotOccupancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          findFirst: {
            args: Prisma.SlotOccupancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotOccupancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          findMany: {
            args: Prisma.SlotOccupancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>[]
          }
          create: {
            args: Prisma.SlotOccupancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          createMany: {
            args: Prisma.SlotOccupancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotOccupancyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>[]
          }
          delete: {
            args: Prisma.SlotOccupancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          update: {
            args: Prisma.SlotOccupancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          deleteMany: {
            args: Prisma.SlotOccupancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotOccupancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotOccupancyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>[]
          }
          upsert: {
            args: Prisma.SlotOccupancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotOccupancyPayload>
          }
          aggregate: {
            args: Prisma.SlotOccupancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlotOccupancy>
          }
          groupBy: {
            args: Prisma.SlotOccupancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotOccupancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotOccupancyCountArgs<ExtArgs>
            result: $Utils.Optional<SlotOccupancyCountAggregateOutputType> | number
          }
        }
      }
      BookingEvent: {
        payload: Prisma.$BookingEventPayload<ExtArgs>
        fields: Prisma.BookingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          findFirst: {
            args: Prisma.BookingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          findMany: {
            args: Prisma.BookingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          create: {
            args: Prisma.BookingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          createMany: {
            args: Prisma.BookingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          delete: {
            args: Prisma.BookingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          update: {
            args: Prisma.BookingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          deleteMany: {
            args: Prisma.BookingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>[]
          }
          upsert: {
            args: Prisma.BookingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingEventPayload>
          }
          aggregate: {
            args: Prisma.BookingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingEvent>
          }
          groupBy: {
            args: Prisma.BookingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingEventCountArgs<ExtArgs>
            result: $Utils.Optional<BookingEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    venue?: VenueOmit
    device?: DeviceOmit
    deviceImage?: DeviceImageOmit
    advertiser?: AdvertiserOmit
    booking?: BookingOmit
    creative?: CreativeOmit
    payment?: PaymentOmit
    slotOccupancy?: SlotOccupancyOmit
    bookingEvent?: BookingEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedVenues: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedVenues?: boolean | UserCountOutputTypeCountOwnedVenuesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    devices: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | VenueCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    bookings: number
    slotOccupancies: number
    images: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | DeviceCountOutputTypeCountBookingsArgs
    slotOccupancies?: boolean | DeviceCountOutputTypeCountSlotOccupanciesArgs
    images?: boolean | DeviceCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSlotOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOccupancyWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceImageWhereInput
  }


  /**
   * Count Type AdvertiserCountOutputType
   */

  export type AdvertiserCountOutputType = {
    bookings: number
  }

  export type AdvertiserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | AdvertiserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvertiserCountOutputType
     */
    select?: AdvertiserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdvertiserCountOutputType without action
   */
  export type AdvertiserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    slotOccupancies: number
    events: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slotOccupancies?: boolean | BookingCountOutputTypeCountSlotOccupanciesArgs
    events?: boolean | BookingCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountSlotOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOccupancyWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    supabaseUserId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    supabaseUserId: number
    email: number
    passwordHash: number
    name: number
    phone: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    supabaseUserId?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    supabaseUserId: string | null
    email: string
    passwordHash: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    ownedVenues?: boolean | User$ownedVenuesArgs<ExtArgs>
    advertiserProfile?: boolean | User$advertiserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    supabaseUserId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseUserId" | "email" | "passwordHash" | "name" | "phone" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedVenues?: boolean | User$ownedVenuesArgs<ExtArgs>
    advertiserProfile?: boolean | User$advertiserProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedVenues: Prisma.$VenuePayload<ExtArgs>[]
      advertiserProfile: Prisma.$AdvertiserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseUserId: string | null
      email: string
      passwordHash: string | null
      name: string
      phone: string
      role: $Enums.UserRole
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedVenues<T extends User$ownedVenuesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedVenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advertiserProfile<T extends User$advertiserProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$advertiserProfileArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly supabaseUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedVenues
   */
  export type User$ownedVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    cursor?: VenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * User.advertiserProfile
   */
  export type User$advertiserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    where?: AdvertiserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    revenueValue: Decimal | null
  }

  export type VenueSumAggregateOutputType = {
    revenueValue: Decimal | null
  }

  export type VenueMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    contactPhone: string | null
    revenueModel: $Enums.RevenueModel | null
    revenueValue: Decimal | null
    defaultImageUrl: string | null
    status: $Enums.VenueStatus | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    contactPhone: string | null
    revenueModel: $Enums.RevenueModel | null
    revenueValue: Decimal | null
    defaultImageUrl: string | null
    status: $Enums.VenueStatus | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    contactEmail: number
    contactPhone: number
    revenueModel: number
    revenueValue: number
    defaultImageUrl: number
    status: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    revenueValue?: true
  }

  export type VenueSumAggregateInputType = {
    revenueValue?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    contactPhone?: true
    revenueModel?: true
    revenueValue?: true
    defaultImageUrl?: true
    status?: true
    ownerId?: true
    createdAt?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    contactPhone?: true
    revenueModel?: true
    revenueValue?: true
    defaultImageUrl?: true
    status?: true
    ownerId?: true
    createdAt?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    contactPhone?: true
    revenueModel?: true
    revenueValue?: true
    defaultImageUrl?: true
    status?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal
    defaultImageUrl: string
    status: $Enums.VenueStatus
    ownerId: string | null
    createdAt: Date
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    revenueModel?: boolean
    revenueValue?: boolean
    defaultImageUrl?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | Venue$ownerArgs<ExtArgs>
    devices?: boolean | Venue$devicesArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    revenueModel?: boolean
    revenueValue?: boolean
    defaultImageUrl?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | Venue$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    revenueModel?: boolean
    revenueValue?: boolean
    defaultImageUrl?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | Venue$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    revenueModel?: boolean
    revenueValue?: boolean
    defaultImageUrl?: boolean
    status?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactEmail" | "contactPhone" | "revenueModel" | "revenueValue" | "defaultImageUrl" | "status" | "ownerId" | "createdAt", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Venue$ownerArgs<ExtArgs>
    devices?: boolean | Venue$devicesArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Venue$ownerArgs<ExtArgs>
  }
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Venue$ownerArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      devices: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactEmail: string
      contactPhone: string
      revenueModel: $Enums.RevenueModel
      revenueValue: Prisma.Decimal
      defaultImageUrl: string
      status: $Enums.VenueStatus
      ownerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Venue$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Venue$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    devices<T extends Venue$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly contactEmail: FieldRef<"Venue", 'String'>
    readonly contactPhone: FieldRef<"Venue", 'String'>
    readonly revenueModel: FieldRef<"Venue", 'RevenueModel'>
    readonly revenueValue: FieldRef<"Venue", 'Decimal'>
    readonly defaultImageUrl: FieldRef<"Venue", 'String'>
    readonly status: FieldRef<"Venue", 'VenueStatus'>
    readonly ownerId: FieldRef<"Venue", 'String'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.owner
   */
  export type Venue$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Venue.devices
   */
  export type Venue$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    slotDayPrice: Decimal | null
    currentlyShowingSlot: number | null
  }

  export type DeviceSumAggregateOutputType = {
    slotDayPrice: Decimal | null
    currentlyShowingSlot: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    locationLabel: string | null
    resolution: string | null
    orientation: $Enums.DeviceOrientation | null
    defaultImageUrl: string | null
    slotDayPrice: Decimal | null
    status: $Enums.DeviceStatus | null
    approvalStatus: $Enums.DeviceApprovalStatus | null
    rejectionReason: string | null
    credentialHash: string | null
    deviceTokenHash: string | null
    lastSeenAt: Date | null
    currentlyShowingSlot: number | null
    createdAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    venueId: string | null
    name: string | null
    locationLabel: string | null
    resolution: string | null
    orientation: $Enums.DeviceOrientation | null
    defaultImageUrl: string | null
    slotDayPrice: Decimal | null
    status: $Enums.DeviceStatus | null
    approvalStatus: $Enums.DeviceApprovalStatus | null
    rejectionReason: string | null
    credentialHash: string | null
    deviceTokenHash: string | null
    lastSeenAt: Date | null
    currentlyShowingSlot: number | null
    createdAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    venueId: number
    name: number
    locationLabel: number
    resolution: number
    orientation: number
    defaultImageUrl: number
    slotDayPrice: number
    status: number
    approvalStatus: number
    rejectionReason: number
    credentialHash: number
    deviceTokenHash: number
    lastSeenAt: number
    currentlyShowingSlot: number
    createdAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    slotDayPrice?: true
    currentlyShowingSlot?: true
  }

  export type DeviceSumAggregateInputType = {
    slotDayPrice?: true
    currentlyShowingSlot?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    locationLabel?: true
    resolution?: true
    orientation?: true
    defaultImageUrl?: true
    slotDayPrice?: true
    status?: true
    approvalStatus?: true
    rejectionReason?: true
    credentialHash?: true
    deviceTokenHash?: true
    lastSeenAt?: true
    currentlyShowingSlot?: true
    createdAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    locationLabel?: true
    resolution?: true
    orientation?: true
    defaultImageUrl?: true
    slotDayPrice?: true
    status?: true
    approvalStatus?: true
    rejectionReason?: true
    credentialHash?: true
    deviceTokenHash?: true
    lastSeenAt?: true
    currentlyShowingSlot?: true
    createdAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    venueId?: true
    name?: true
    locationLabel?: true
    resolution?: true
    orientation?: true
    defaultImageUrl?: true
    slotDayPrice?: true
    status?: true
    approvalStatus?: true
    rejectionReason?: true
    credentialHash?: true
    deviceTokenHash?: true
    lastSeenAt?: true
    currentlyShowingSlot?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal
    status: $Enums.DeviceStatus
    approvalStatus: $Enums.DeviceApprovalStatus
    rejectionReason: string | null
    credentialHash: string
    deviceTokenHash: string | null
    lastSeenAt: Date | null
    currentlyShowingSlot: number | null
    createdAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    locationLabel?: boolean
    resolution?: boolean
    orientation?: boolean
    defaultImageUrl?: boolean
    slotDayPrice?: boolean
    status?: boolean
    approvalStatus?: boolean
    rejectionReason?: boolean
    credentialHash?: boolean
    deviceTokenHash?: boolean
    lastSeenAt?: boolean
    currentlyShowingSlot?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    bookings?: boolean | Device$bookingsArgs<ExtArgs>
    slotOccupancies?: boolean | Device$slotOccupanciesArgs<ExtArgs>
    images?: boolean | Device$imagesArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    locationLabel?: boolean
    resolution?: boolean
    orientation?: boolean
    defaultImageUrl?: boolean
    slotDayPrice?: boolean
    status?: boolean
    approvalStatus?: boolean
    rejectionReason?: boolean
    credentialHash?: boolean
    deviceTokenHash?: boolean
    lastSeenAt?: boolean
    currentlyShowingSlot?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    name?: boolean
    locationLabel?: boolean
    resolution?: boolean
    orientation?: boolean
    defaultImageUrl?: boolean
    slotDayPrice?: boolean
    status?: boolean
    approvalStatus?: boolean
    rejectionReason?: boolean
    credentialHash?: boolean
    deviceTokenHash?: boolean
    lastSeenAt?: boolean
    currentlyShowingSlot?: boolean
    createdAt?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    venueId?: boolean
    name?: boolean
    locationLabel?: boolean
    resolution?: boolean
    orientation?: boolean
    defaultImageUrl?: boolean
    slotDayPrice?: boolean
    status?: boolean
    approvalStatus?: boolean
    rejectionReason?: boolean
    credentialHash?: boolean
    deviceTokenHash?: boolean
    lastSeenAt?: boolean
    currentlyShowingSlot?: boolean
    createdAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "name" | "locationLabel" | "resolution" | "orientation" | "defaultImageUrl" | "slotDayPrice" | "status" | "approvalStatus" | "rejectionReason" | "credentialHash" | "deviceTokenHash" | "lastSeenAt" | "currentlyShowingSlot" | "createdAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    bookings?: boolean | Device$bookingsArgs<ExtArgs>
    slotOccupancies?: boolean | Device$slotOccupanciesArgs<ExtArgs>
    images?: boolean | Device$imagesArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      slotOccupancies: Prisma.$SlotOccupancyPayload<ExtArgs>[]
      images: Prisma.$DeviceImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      venueId: string
      name: string
      locationLabel: string
      resolution: string
      orientation: $Enums.DeviceOrientation
      defaultImageUrl: string
      slotDayPrice: Prisma.Decimal
      status: $Enums.DeviceStatus
      approvalStatus: $Enums.DeviceApprovalStatus
      rejectionReason: string | null
      credentialHash: string
      deviceTokenHash: string | null
      lastSeenAt: Date | null
      currentlyShowingSlot: number | null
      createdAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Device$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Device$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slotOccupancies<T extends Device$slotOccupanciesArgs<ExtArgs> = {}>(args?: Subset<T, Device$slotOccupanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Device$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Device$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly venueId: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly locationLabel: FieldRef<"Device", 'String'>
    readonly resolution: FieldRef<"Device", 'String'>
    readonly orientation: FieldRef<"Device", 'DeviceOrientation'>
    readonly defaultImageUrl: FieldRef<"Device", 'String'>
    readonly slotDayPrice: FieldRef<"Device", 'Decimal'>
    readonly status: FieldRef<"Device", 'DeviceStatus'>
    readonly approvalStatus: FieldRef<"Device", 'DeviceApprovalStatus'>
    readonly rejectionReason: FieldRef<"Device", 'String'>
    readonly credentialHash: FieldRef<"Device", 'String'>
    readonly deviceTokenHash: FieldRef<"Device", 'String'>
    readonly lastSeenAt: FieldRef<"Device", 'DateTime'>
    readonly currentlyShowingSlot: FieldRef<"Device", 'Int'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.bookings
   */
  export type Device$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Device.slotOccupancies
   */
  export type Device$slotOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    where?: SlotOccupancyWhereInput
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    cursor?: SlotOccupancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotOccupancyScalarFieldEnum | SlotOccupancyScalarFieldEnum[]
  }

  /**
   * Device.images
   */
  export type Device$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    where?: DeviceImageWhereInput
    orderBy?: DeviceImageOrderByWithRelationInput | DeviceImageOrderByWithRelationInput[]
    cursor?: DeviceImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceImageScalarFieldEnum | DeviceImageScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceImage
   */

  export type AggregateDeviceImage = {
    _count: DeviceImageCountAggregateOutputType | null
    _avg: DeviceImageAvgAggregateOutputType | null
    _sum: DeviceImageSumAggregateOutputType | null
    _min: DeviceImageMinAggregateOutputType | null
    _max: DeviceImageMaxAggregateOutputType | null
  }

  export type DeviceImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type DeviceImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type DeviceImageMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    imageUrl: string | null
    sortOrder: number | null
  }

  export type DeviceImageMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    imageUrl: string | null
    sortOrder: number | null
  }

  export type DeviceImageCountAggregateOutputType = {
    id: number
    deviceId: number
    imageUrl: number
    sortOrder: number
    _all: number
  }


  export type DeviceImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type DeviceImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type DeviceImageMinAggregateInputType = {
    id?: true
    deviceId?: true
    imageUrl?: true
    sortOrder?: true
  }

  export type DeviceImageMaxAggregateInputType = {
    id?: true
    deviceId?: true
    imageUrl?: true
    sortOrder?: true
  }

  export type DeviceImageCountAggregateInputType = {
    id?: true
    deviceId?: true
    imageUrl?: true
    sortOrder?: true
    _all?: true
  }

  export type DeviceImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceImage to aggregate.
     */
    where?: DeviceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceImages to fetch.
     */
    orderBy?: DeviceImageOrderByWithRelationInput | DeviceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceImages
    **/
    _count?: true | DeviceImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceImageMaxAggregateInputType
  }

  export type GetDeviceImageAggregateType<T extends DeviceImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceImage[P]>
      : GetScalarType<T[P], AggregateDeviceImage[P]>
  }




  export type DeviceImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceImageWhereInput
    orderBy?: DeviceImageOrderByWithAggregationInput | DeviceImageOrderByWithAggregationInput[]
    by: DeviceImageScalarFieldEnum[] | DeviceImageScalarFieldEnum
    having?: DeviceImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceImageCountAggregateInputType | true
    _avg?: DeviceImageAvgAggregateInputType
    _sum?: DeviceImageSumAggregateInputType
    _min?: DeviceImageMinAggregateInputType
    _max?: DeviceImageMaxAggregateInputType
  }

  export type DeviceImageGroupByOutputType = {
    id: string
    deviceId: string
    imageUrl: string
    sortOrder: number
    _count: DeviceImageCountAggregateOutputType | null
    _avg: DeviceImageAvgAggregateOutputType | null
    _sum: DeviceImageSumAggregateOutputType | null
    _min: DeviceImageMinAggregateOutputType | null
    _max: DeviceImageMaxAggregateOutputType | null
  }

  type GetDeviceImageGroupByPayload<T extends DeviceImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceImageGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceImageGroupByOutputType[P]>
        }
      >
    >


  export type DeviceImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceImage"]>

  export type DeviceImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceImage"]>

  export type DeviceImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceImage"]>

  export type DeviceImageSelectScalar = {
    id?: boolean
    deviceId?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
  }

  export type DeviceImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "imageUrl" | "sortOrder", ExtArgs["result"]["deviceImage"]>
  export type DeviceImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceImage"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      imageUrl: string
      sortOrder: number
    }, ExtArgs["result"]["deviceImage"]>
    composites: {}
  }

  type DeviceImageGetPayload<S extends boolean | null | undefined | DeviceImageDefaultArgs> = $Result.GetResult<Prisma.$DeviceImagePayload, S>

  type DeviceImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceImageCountAggregateInputType | true
    }

  export interface DeviceImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceImage'], meta: { name: 'DeviceImage' } }
    /**
     * Find zero or one DeviceImage that matches the filter.
     * @param {DeviceImageFindUniqueArgs} args - Arguments to find a DeviceImage
     * @example
     * // Get one DeviceImage
     * const deviceImage = await prisma.deviceImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceImageFindUniqueArgs>(args: SelectSubset<T, DeviceImageFindUniqueArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceImageFindUniqueOrThrowArgs} args - Arguments to find a DeviceImage
     * @example
     * // Get one DeviceImage
     * const deviceImage = await prisma.deviceImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceImageFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageFindFirstArgs} args - Arguments to find a DeviceImage
     * @example
     * // Get one DeviceImage
     * const deviceImage = await prisma.deviceImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceImageFindFirstArgs>(args?: SelectSubset<T, DeviceImageFindFirstArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageFindFirstOrThrowArgs} args - Arguments to find a DeviceImage
     * @example
     * // Get one DeviceImage
     * const deviceImage = await prisma.deviceImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceImageFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceImages
     * const deviceImages = await prisma.deviceImage.findMany()
     * 
     * // Get first 10 DeviceImages
     * const deviceImages = await prisma.deviceImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceImageWithIdOnly = await prisma.deviceImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceImageFindManyArgs>(args?: SelectSubset<T, DeviceImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceImage.
     * @param {DeviceImageCreateArgs} args - Arguments to create a DeviceImage.
     * @example
     * // Create one DeviceImage
     * const DeviceImage = await prisma.deviceImage.create({
     *   data: {
     *     // ... data to create a DeviceImage
     *   }
     * })
     * 
     */
    create<T extends DeviceImageCreateArgs>(args: SelectSubset<T, DeviceImageCreateArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceImages.
     * @param {DeviceImageCreateManyArgs} args - Arguments to create many DeviceImages.
     * @example
     * // Create many DeviceImages
     * const deviceImage = await prisma.deviceImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceImageCreateManyArgs>(args?: SelectSubset<T, DeviceImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceImages and returns the data saved in the database.
     * @param {DeviceImageCreateManyAndReturnArgs} args - Arguments to create many DeviceImages.
     * @example
     * // Create many DeviceImages
     * const deviceImage = await prisma.deviceImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceImages and only return the `id`
     * const deviceImageWithIdOnly = await prisma.deviceImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceImageCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceImage.
     * @param {DeviceImageDeleteArgs} args - Arguments to delete one DeviceImage.
     * @example
     * // Delete one DeviceImage
     * const DeviceImage = await prisma.deviceImage.delete({
     *   where: {
     *     // ... filter to delete one DeviceImage
     *   }
     * })
     * 
     */
    delete<T extends DeviceImageDeleteArgs>(args: SelectSubset<T, DeviceImageDeleteArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceImage.
     * @param {DeviceImageUpdateArgs} args - Arguments to update one DeviceImage.
     * @example
     * // Update one DeviceImage
     * const deviceImage = await prisma.deviceImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceImageUpdateArgs>(args: SelectSubset<T, DeviceImageUpdateArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceImages.
     * @param {DeviceImageDeleteManyArgs} args - Arguments to filter DeviceImages to delete.
     * @example
     * // Delete a few DeviceImages
     * const { count } = await prisma.deviceImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceImageDeleteManyArgs>(args?: SelectSubset<T, DeviceImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceImages
     * const deviceImage = await prisma.deviceImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceImageUpdateManyArgs>(args: SelectSubset<T, DeviceImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceImages and returns the data updated in the database.
     * @param {DeviceImageUpdateManyAndReturnArgs} args - Arguments to update many DeviceImages.
     * @example
     * // Update many DeviceImages
     * const deviceImage = await prisma.deviceImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceImages and only return the `id`
     * const deviceImageWithIdOnly = await prisma.deviceImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceImageUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceImage.
     * @param {DeviceImageUpsertArgs} args - Arguments to update or create a DeviceImage.
     * @example
     * // Update or create a DeviceImage
     * const deviceImage = await prisma.deviceImage.upsert({
     *   create: {
     *     // ... data to create a DeviceImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceImage we want to update
     *   }
     * })
     */
    upsert<T extends DeviceImageUpsertArgs>(args: SelectSubset<T, DeviceImageUpsertArgs<ExtArgs>>): Prisma__DeviceImageClient<$Result.GetResult<Prisma.$DeviceImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageCountArgs} args - Arguments to filter DeviceImages to count.
     * @example
     * // Count the number of DeviceImages
     * const count = await prisma.deviceImage.count({
     *   where: {
     *     // ... the filter for the DeviceImages we want to count
     *   }
     * })
    **/
    count<T extends DeviceImageCountArgs>(
      args?: Subset<T, DeviceImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceImageAggregateArgs>(args: Subset<T, DeviceImageAggregateArgs>): Prisma.PrismaPromise<GetDeviceImageAggregateType<T>>

    /**
     * Group by DeviceImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceImageGroupByArgs['orderBy'] }
        : { orderBy?: DeviceImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceImage model
   */
  readonly fields: DeviceImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceImage model
   */
  interface DeviceImageFieldRefs {
    readonly id: FieldRef<"DeviceImage", 'String'>
    readonly deviceId: FieldRef<"DeviceImage", 'String'>
    readonly imageUrl: FieldRef<"DeviceImage", 'String'>
    readonly sortOrder: FieldRef<"DeviceImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeviceImage findUnique
   */
  export type DeviceImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter, which DeviceImage to fetch.
     */
    where: DeviceImageWhereUniqueInput
  }

  /**
   * DeviceImage findUniqueOrThrow
   */
  export type DeviceImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter, which DeviceImage to fetch.
     */
    where: DeviceImageWhereUniqueInput
  }

  /**
   * DeviceImage findFirst
   */
  export type DeviceImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter, which DeviceImage to fetch.
     */
    where?: DeviceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceImages to fetch.
     */
    orderBy?: DeviceImageOrderByWithRelationInput | DeviceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceImages.
     */
    cursor?: DeviceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceImages.
     */
    distinct?: DeviceImageScalarFieldEnum | DeviceImageScalarFieldEnum[]
  }

  /**
   * DeviceImage findFirstOrThrow
   */
  export type DeviceImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter, which DeviceImage to fetch.
     */
    where?: DeviceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceImages to fetch.
     */
    orderBy?: DeviceImageOrderByWithRelationInput | DeviceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceImages.
     */
    cursor?: DeviceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceImages.
     */
    distinct?: DeviceImageScalarFieldEnum | DeviceImageScalarFieldEnum[]
  }

  /**
   * DeviceImage findMany
   */
  export type DeviceImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter, which DeviceImages to fetch.
     */
    where?: DeviceImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceImages to fetch.
     */
    orderBy?: DeviceImageOrderByWithRelationInput | DeviceImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceImages.
     */
    cursor?: DeviceImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceImages.
     */
    skip?: number
    distinct?: DeviceImageScalarFieldEnum | DeviceImageScalarFieldEnum[]
  }

  /**
   * DeviceImage create
   */
  export type DeviceImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceImage.
     */
    data: XOR<DeviceImageCreateInput, DeviceImageUncheckedCreateInput>
  }

  /**
   * DeviceImage createMany
   */
  export type DeviceImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceImages.
     */
    data: DeviceImageCreateManyInput | DeviceImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceImage createManyAndReturn
   */
  export type DeviceImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceImages.
     */
    data: DeviceImageCreateManyInput | DeviceImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceImage update
   */
  export type DeviceImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceImage.
     */
    data: XOR<DeviceImageUpdateInput, DeviceImageUncheckedUpdateInput>
    /**
     * Choose, which DeviceImage to update.
     */
    where: DeviceImageWhereUniqueInput
  }

  /**
   * DeviceImage updateMany
   */
  export type DeviceImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceImages.
     */
    data: XOR<DeviceImageUpdateManyMutationInput, DeviceImageUncheckedUpdateManyInput>
    /**
     * Filter which DeviceImages to update
     */
    where?: DeviceImageWhereInput
    /**
     * Limit how many DeviceImages to update.
     */
    limit?: number
  }

  /**
   * DeviceImage updateManyAndReturn
   */
  export type DeviceImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * The data used to update DeviceImages.
     */
    data: XOR<DeviceImageUpdateManyMutationInput, DeviceImageUncheckedUpdateManyInput>
    /**
     * Filter which DeviceImages to update
     */
    where?: DeviceImageWhereInput
    /**
     * Limit how many DeviceImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceImage upsert
   */
  export type DeviceImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceImage to update in case it exists.
     */
    where: DeviceImageWhereUniqueInput
    /**
     * In case the DeviceImage found by the `where` argument doesn't exist, create a new DeviceImage with this data.
     */
    create: XOR<DeviceImageCreateInput, DeviceImageUncheckedCreateInput>
    /**
     * In case the DeviceImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceImageUpdateInput, DeviceImageUncheckedUpdateInput>
  }

  /**
   * DeviceImage delete
   */
  export type DeviceImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
    /**
     * Filter which DeviceImage to delete.
     */
    where: DeviceImageWhereUniqueInput
  }

  /**
   * DeviceImage deleteMany
   */
  export type DeviceImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceImages to delete
     */
    where?: DeviceImageWhereInput
    /**
     * Limit how many DeviceImages to delete.
     */
    limit?: number
  }

  /**
   * DeviceImage without action
   */
  export type DeviceImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceImage
     */
    select?: DeviceImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceImage
     */
    omit?: DeviceImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceImageInclude<ExtArgs> | null
  }


  /**
   * Model Advertiser
   */

  export type AggregateAdvertiser = {
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  export type AdvertiserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AdvertiserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phone: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AdvertiserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    userId: number
    createdAt: number
    _all: number
  }


  export type AdvertiserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    userId?: true
    createdAt?: true
  }

  export type AdvertiserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    userId?: true
    createdAt?: true
  }

  export type AdvertiserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type AdvertiserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertiser to aggregate.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Advertisers
    **/
    _count?: true | AdvertiserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvertiserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvertiserMaxAggregateInputType
  }

  export type GetAdvertiserAggregateType<T extends AdvertiserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvertiser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvertiser[P]>
      : GetScalarType<T[P], AggregateAdvertiser[P]>
  }




  export type AdvertiserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvertiserWhereInput
    orderBy?: AdvertiserOrderByWithAggregationInput | AdvertiserOrderByWithAggregationInput[]
    by: AdvertiserScalarFieldEnum[] | AdvertiserScalarFieldEnum
    having?: AdvertiserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvertiserCountAggregateInputType | true
    _min?: AdvertiserMinAggregateInputType
    _max?: AdvertiserMaxAggregateInputType
  }

  export type AdvertiserGroupByOutputType = {
    id: string
    email: string
    name: string
    phone: string
    userId: string | null
    createdAt: Date
    _count: AdvertiserCountAggregateOutputType | null
    _min: AdvertiserMinAggregateOutputType | null
    _max: AdvertiserMaxAggregateOutputType | null
  }

  type GetAdvertiserGroupByPayload<T extends AdvertiserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvertiserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvertiserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
            : GetScalarType<T[P], AdvertiserGroupByOutputType[P]>
        }
      >
    >


  export type AdvertiserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Advertiser$userArgs<ExtArgs>
    bookings?: boolean | Advertiser$bookingsArgs<ExtArgs>
    _count?: boolean | AdvertiserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Advertiser$userArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | Advertiser$userArgs<ExtArgs>
  }, ExtArgs["result"]["advertiser"]>

  export type AdvertiserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type AdvertiserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "userId" | "createdAt", ExtArgs["result"]["advertiser"]>
  export type AdvertiserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Advertiser$userArgs<ExtArgs>
    bookings?: boolean | Advertiser$bookingsArgs<ExtArgs>
    _count?: boolean | AdvertiserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdvertiserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Advertiser$userArgs<ExtArgs>
  }
  export type AdvertiserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Advertiser$userArgs<ExtArgs>
  }

  export type $AdvertiserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Advertiser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      phone: string
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["advertiser"]>
    composites: {}
  }

  type AdvertiserGetPayload<S extends boolean | null | undefined | AdvertiserDefaultArgs> = $Result.GetResult<Prisma.$AdvertiserPayload, S>

  type AdvertiserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvertiserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvertiserCountAggregateInputType | true
    }

  export interface AdvertiserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Advertiser'], meta: { name: 'Advertiser' } }
    /**
     * Find zero or one Advertiser that matches the filter.
     * @param {AdvertiserFindUniqueArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvertiserFindUniqueArgs>(args: SelectSubset<T, AdvertiserFindUniqueArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Advertiser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvertiserFindUniqueOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvertiserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvertiserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvertiserFindFirstArgs>(args?: SelectSubset<T, AdvertiserFindFirstArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Advertiser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindFirstOrThrowArgs} args - Arguments to find a Advertiser
     * @example
     * // Get one Advertiser
     * const advertiser = await prisma.advertiser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvertiserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvertiserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Advertisers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Advertisers
     * const advertisers = await prisma.advertiser.findMany()
     * 
     * // Get first 10 Advertisers
     * const advertisers = await prisma.advertiser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvertiserFindManyArgs>(args?: SelectSubset<T, AdvertiserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Advertiser.
     * @param {AdvertiserCreateArgs} args - Arguments to create a Advertiser.
     * @example
     * // Create one Advertiser
     * const Advertiser = await prisma.advertiser.create({
     *   data: {
     *     // ... data to create a Advertiser
     *   }
     * })
     * 
     */
    create<T extends AdvertiserCreateArgs>(args: SelectSubset<T, AdvertiserCreateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Advertisers.
     * @param {AdvertiserCreateManyArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvertiserCreateManyArgs>(args?: SelectSubset<T, AdvertiserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Advertisers and returns the data saved in the database.
     * @param {AdvertiserCreateManyAndReturnArgs} args - Arguments to create many Advertisers.
     * @example
     * // Create many Advertisers
     * const advertiser = await prisma.advertiser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvertiserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvertiserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Advertiser.
     * @param {AdvertiserDeleteArgs} args - Arguments to delete one Advertiser.
     * @example
     * // Delete one Advertiser
     * const Advertiser = await prisma.advertiser.delete({
     *   where: {
     *     // ... filter to delete one Advertiser
     *   }
     * })
     * 
     */
    delete<T extends AdvertiserDeleteArgs>(args: SelectSubset<T, AdvertiserDeleteArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Advertiser.
     * @param {AdvertiserUpdateArgs} args - Arguments to update one Advertiser.
     * @example
     * // Update one Advertiser
     * const advertiser = await prisma.advertiser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvertiserUpdateArgs>(args: SelectSubset<T, AdvertiserUpdateArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Advertisers.
     * @param {AdvertiserDeleteManyArgs} args - Arguments to filter Advertisers to delete.
     * @example
     * // Delete a few Advertisers
     * const { count } = await prisma.advertiser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvertiserDeleteManyArgs>(args?: SelectSubset<T, AdvertiserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvertiserUpdateManyArgs>(args: SelectSubset<T, AdvertiserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Advertisers and returns the data updated in the database.
     * @param {AdvertiserUpdateManyAndReturnArgs} args - Arguments to update many Advertisers.
     * @example
     * // Update many Advertisers
     * const advertiser = await prisma.advertiser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Advertisers and only return the `id`
     * const advertiserWithIdOnly = await prisma.advertiser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvertiserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvertiserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Advertiser.
     * @param {AdvertiserUpsertArgs} args - Arguments to update or create a Advertiser.
     * @example
     * // Update or create a Advertiser
     * const advertiser = await prisma.advertiser.upsert({
     *   create: {
     *     // ... data to create a Advertiser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Advertiser we want to update
     *   }
     * })
     */
    upsert<T extends AdvertiserUpsertArgs>(args: SelectSubset<T, AdvertiserUpsertArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Advertisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserCountArgs} args - Arguments to filter Advertisers to count.
     * @example
     * // Count the number of Advertisers
     * const count = await prisma.advertiser.count({
     *   where: {
     *     // ... the filter for the Advertisers we want to count
     *   }
     * })
    **/
    count<T extends AdvertiserCountArgs>(
      args?: Subset<T, AdvertiserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvertiserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvertiserAggregateArgs>(args: Subset<T, AdvertiserAggregateArgs>): Prisma.PrismaPromise<GetAdvertiserAggregateType<T>>

    /**
     * Group by Advertiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvertiserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvertiserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvertiserGroupByArgs['orderBy'] }
        : { orderBy?: AdvertiserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvertiserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvertiserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Advertiser model
   */
  readonly fields: AdvertiserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Advertiser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvertiserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Advertiser$userArgs<ExtArgs> = {}>(args?: Subset<T, Advertiser$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Advertiser$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Advertiser$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Advertiser model
   */
  interface AdvertiserFieldRefs {
    readonly id: FieldRef<"Advertiser", 'String'>
    readonly email: FieldRef<"Advertiser", 'String'>
    readonly name: FieldRef<"Advertiser", 'String'>
    readonly phone: FieldRef<"Advertiser", 'String'>
    readonly userId: FieldRef<"Advertiser", 'String'>
    readonly createdAt: FieldRef<"Advertiser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Advertiser findUnique
   */
  export type AdvertiserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findUniqueOrThrow
   */
  export type AdvertiserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser findFirst
   */
  export type AdvertiserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findFirstOrThrow
   */
  export type AdvertiserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertiser to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Advertisers.
     */
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser findMany
   */
  export type AdvertiserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter, which Advertisers to fetch.
     */
    where?: AdvertiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Advertisers to fetch.
     */
    orderBy?: AdvertiserOrderByWithRelationInput | AdvertiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Advertisers.
     */
    cursor?: AdvertiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Advertisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Advertisers.
     */
    skip?: number
    distinct?: AdvertiserScalarFieldEnum | AdvertiserScalarFieldEnum[]
  }

  /**
   * Advertiser create
   */
  export type AdvertiserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to create a Advertiser.
     */
    data: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
  }

  /**
   * Advertiser createMany
   */
  export type AdvertiserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Advertiser createManyAndReturn
   */
  export type AdvertiserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to create many Advertisers.
     */
    data: AdvertiserCreateManyInput | AdvertiserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser update
   */
  export type AdvertiserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The data needed to update a Advertiser.
     */
    data: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
    /**
     * Choose, which Advertiser to update.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser updateMany
   */
  export type AdvertiserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
  }

  /**
   * Advertiser updateManyAndReturn
   */
  export type AdvertiserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * The data used to update Advertisers.
     */
    data: XOR<AdvertiserUpdateManyMutationInput, AdvertiserUncheckedUpdateManyInput>
    /**
     * Filter which Advertisers to update
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Advertiser upsert
   */
  export type AdvertiserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * The filter to search for the Advertiser to update in case it exists.
     */
    where: AdvertiserWhereUniqueInput
    /**
     * In case the Advertiser found by the `where` argument doesn't exist, create a new Advertiser with this data.
     */
    create: XOR<AdvertiserCreateInput, AdvertiserUncheckedCreateInput>
    /**
     * In case the Advertiser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvertiserUpdateInput, AdvertiserUncheckedUpdateInput>
  }

  /**
   * Advertiser delete
   */
  export type AdvertiserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
    /**
     * Filter which Advertiser to delete.
     */
    where: AdvertiserWhereUniqueInput
  }

  /**
   * Advertiser deleteMany
   */
  export type AdvertiserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Advertisers to delete
     */
    where?: AdvertiserWhereInput
    /**
     * Limit how many Advertisers to delete.
     */
    limit?: number
  }

  /**
   * Advertiser.user
   */
  export type Advertiser$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Advertiser.bookings
   */
  export type Advertiser$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Advertiser without action
   */
  export type AdvertiserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Advertiser
     */
    select?: AdvertiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Advertiser
     */
    omit?: AdvertiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvertiserInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    slotIndex: number | null
    priceTotal: Decimal | null
    venueSplitAmount: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    slotIndex: number | null
    priceTotal: Decimal | null
    venueSplitAmount: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    advertiserId: string | null
    deviceId: string | null
    slotIndex: number | null
    dateStart: Date | null
    dateEnd: Date | null
    priceTotal: Decimal | null
    venueSplitAmount: Decimal | null
    status: $Enums.BookingStatus | null
    holdExpiresAt: Date | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    advertiserId: string | null
    deviceId: string | null
    slotIndex: number | null
    dateStart: Date | null
    dateEnd: Date | null
    priceTotal: Decimal | null
    venueSplitAmount: Decimal | null
    status: $Enums.BookingStatus | null
    holdExpiresAt: Date | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    advertiserId: number
    deviceId: number
    slotIndex: number
    dateStart: number
    dateEnd: number
    priceTotal: number
    venueSplitAmount: number
    status: number
    holdExpiresAt: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    slotIndex?: true
    priceTotal?: true
    venueSplitAmount?: true
  }

  export type BookingSumAggregateInputType = {
    slotIndex?: true
    priceTotal?: true
    venueSplitAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    advertiserId?: true
    deviceId?: true
    slotIndex?: true
    dateStart?: true
    dateEnd?: true
    priceTotal?: true
    venueSplitAmount?: true
    status?: true
    holdExpiresAt?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    advertiserId?: true
    deviceId?: true
    slotIndex?: true
    dateStart?: true
    dateEnd?: true
    priceTotal?: true
    venueSplitAmount?: true
    status?: true
    holdExpiresAt?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    advertiserId?: true
    deviceId?: true
    slotIndex?: true
    dateStart?: true
    dateEnd?: true
    priceTotal?: true
    venueSplitAmount?: true
    status?: true
    holdExpiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date
    dateEnd: Date
    priceTotal: Decimal
    venueSplitAmount: Decimal
    status: $Enums.BookingStatus
    holdExpiresAt: Date | null
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    deviceId?: boolean
    slotIndex?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    priceTotal?: boolean
    venueSplitAmount?: boolean
    status?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    creative?: boolean | Booking$creativeArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    slotOccupancies?: boolean | Booking$slotOccupanciesArgs<ExtArgs>
    events?: boolean | Booking$eventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    deviceId?: boolean
    slotIndex?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    priceTotal?: boolean
    venueSplitAmount?: boolean
    status?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advertiserId?: boolean
    deviceId?: boolean
    slotIndex?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    priceTotal?: boolean
    venueSplitAmount?: boolean
    status?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    advertiserId?: boolean
    deviceId?: boolean
    slotIndex?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    priceTotal?: boolean
    venueSplitAmount?: boolean
    status?: boolean
    holdExpiresAt?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "advertiserId" | "deviceId" | "slotIndex" | "dateStart" | "dateEnd" | "priceTotal" | "venueSplitAmount" | "status" | "holdExpiresAt" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    creative?: boolean | Booking$creativeArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    slotOccupancies?: boolean | Booking$slotOccupanciesArgs<ExtArgs>
    events?: boolean | Booking$eventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    advertiser?: boolean | AdvertiserDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      advertiser: Prisma.$AdvertiserPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>
      creative: Prisma.$CreativePayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      slotOccupancies: Prisma.$SlotOccupancyPayload<ExtArgs>[]
      events: Prisma.$BookingEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      advertiserId: string
      deviceId: string
      slotIndex: number
      dateStart: Date
      dateEnd: Date
      priceTotal: Prisma.Decimal
      venueSplitAmount: Prisma.Decimal
      status: $Enums.BookingStatus
      holdExpiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    advertiser<T extends AdvertiserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdvertiserDefaultArgs<ExtArgs>>): Prisma__AdvertiserClient<$Result.GetResult<Prisma.$AdvertiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creative<T extends Booking$creativeArgs<ExtArgs> = {}>(args?: Subset<T, Booking$creativeArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    slotOccupancies<T extends Booking$slotOccupanciesArgs<ExtArgs> = {}>(args?: Subset<T, Booking$slotOccupanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Booking$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly advertiserId: FieldRef<"Booking", 'String'>
    readonly deviceId: FieldRef<"Booking", 'String'>
    readonly slotIndex: FieldRef<"Booking", 'Int'>
    readonly dateStart: FieldRef<"Booking", 'DateTime'>
    readonly dateEnd: FieldRef<"Booking", 'DateTime'>
    readonly priceTotal: FieldRef<"Booking", 'Decimal'>
    readonly venueSplitAmount: FieldRef<"Booking", 'Decimal'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly holdExpiresAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.creative
   */
  export type Booking$creativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    where?: CreativeWhereInput
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking.slotOccupancies
   */
  export type Booking$slotOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    where?: SlotOccupancyWhereInput
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    cursor?: SlotOccupancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotOccupancyScalarFieldEnum | SlotOccupancyScalarFieldEnum[]
  }

  /**
   * Booking.events
   */
  export type Booking$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    where?: BookingEventWhereInput
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    cursor?: BookingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Creative
   */

  export type AggregateCreative = {
    _count: CreativeCountAggregateOutputType | null
    _avg: CreativeAvgAggregateOutputType | null
    _sum: CreativeSumAggregateOutputType | null
    _min: CreativeMinAggregateOutputType | null
    _max: CreativeMaxAggregateOutputType | null
  }

  export type CreativeAvgAggregateOutputType = {
    width: number | null
    height: number | null
    fileSizeBytes: number | null
  }

  export type CreativeSumAggregateOutputType = {
    width: number | null
    height: number | null
    fileSizeBytes: number | null
  }

  export type CreativeMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    imageUrl: string | null
    width: number | null
    height: number | null
    fileSizeBytes: number | null
    moderationStatus: $Enums.ModerationStatus | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type CreativeMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    imageUrl: string | null
    width: number | null
    height: number | null
    fileSizeBytes: number | null
    moderationStatus: $Enums.ModerationStatus | null
    rejectionReason: string | null
    uploadedAt: Date | null
  }

  export type CreativeCountAggregateOutputType = {
    id: number
    bookingId: number
    imageUrl: number
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus: number
    rejectionReason: number
    uploadedAt: number
    _all: number
  }


  export type CreativeAvgAggregateInputType = {
    width?: true
    height?: true
    fileSizeBytes?: true
  }

  export type CreativeSumAggregateInputType = {
    width?: true
    height?: true
    fileSizeBytes?: true
  }

  export type CreativeMinAggregateInputType = {
    id?: true
    bookingId?: true
    imageUrl?: true
    width?: true
    height?: true
    fileSizeBytes?: true
    moderationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type CreativeMaxAggregateInputType = {
    id?: true
    bookingId?: true
    imageUrl?: true
    width?: true
    height?: true
    fileSizeBytes?: true
    moderationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
  }

  export type CreativeCountAggregateInputType = {
    id?: true
    bookingId?: true
    imageUrl?: true
    width?: true
    height?: true
    fileSizeBytes?: true
    moderationStatus?: true
    rejectionReason?: true
    uploadedAt?: true
    _all?: true
  }

  export type CreativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creative to aggregate.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Creatives
    **/
    _count?: true | CreativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreativeMaxAggregateInputType
  }

  export type GetCreativeAggregateType<T extends CreativeAggregateArgs> = {
        [P in keyof T & keyof AggregateCreative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreative[P]>
      : GetScalarType<T[P], AggregateCreative[P]>
  }




  export type CreativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreativeWhereInput
    orderBy?: CreativeOrderByWithAggregationInput | CreativeOrderByWithAggregationInput[]
    by: CreativeScalarFieldEnum[] | CreativeScalarFieldEnum
    having?: CreativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreativeCountAggregateInputType | true
    _avg?: CreativeAvgAggregateInputType
    _sum?: CreativeSumAggregateInputType
    _min?: CreativeMinAggregateInputType
    _max?: CreativeMaxAggregateInputType
  }

  export type CreativeGroupByOutputType = {
    id: string
    bookingId: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus: $Enums.ModerationStatus
    rejectionReason: string | null
    uploadedAt: Date
    _count: CreativeCountAggregateOutputType | null
    _avg: CreativeAvgAggregateOutputType | null
    _sum: CreativeSumAggregateOutputType | null
    _min: CreativeMinAggregateOutputType | null
    _max: CreativeMaxAggregateOutputType | null
  }

  type GetCreativeGroupByPayload<T extends CreativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreativeGroupByOutputType[P]>
            : GetScalarType<T[P], CreativeGroupByOutputType[P]>
        }
      >
    >


  export type CreativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    fileSizeBytes?: boolean
    moderationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    fileSizeBytes?: boolean
    moderationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    fileSizeBytes?: boolean
    moderationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creative"]>

  export type CreativeSelectScalar = {
    id?: boolean
    bookingId?: boolean
    imageUrl?: boolean
    width?: boolean
    height?: boolean
    fileSizeBytes?: boolean
    moderationStatus?: boolean
    rejectionReason?: boolean
    uploadedAt?: boolean
  }

  export type CreativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "imageUrl" | "width" | "height" | "fileSizeBytes" | "moderationStatus" | "rejectionReason" | "uploadedAt", ExtArgs["result"]["creative"]>
  export type CreativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type CreativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type CreativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $CreativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Creative"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      imageUrl: string
      width: number
      height: number
      fileSizeBytes: number
      moderationStatus: $Enums.ModerationStatus
      rejectionReason: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["creative"]>
    composites: {}
  }

  type CreativeGetPayload<S extends boolean | null | undefined | CreativeDefaultArgs> = $Result.GetResult<Prisma.$CreativePayload, S>

  type CreativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreativeCountAggregateInputType | true
    }

  export interface CreativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Creative'], meta: { name: 'Creative' } }
    /**
     * Find zero or one Creative that matches the filter.
     * @param {CreativeFindUniqueArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreativeFindUniqueArgs>(args: SelectSubset<T, CreativeFindUniqueArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreativeFindUniqueOrThrowArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreativeFindUniqueOrThrowArgs>(args: SelectSubset<T, CreativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindFirstArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreativeFindFirstArgs>(args?: SelectSubset<T, CreativeFindFirstArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindFirstOrThrowArgs} args - Arguments to find a Creative
     * @example
     * // Get one Creative
     * const creative = await prisma.creative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreativeFindFirstOrThrowArgs>(args?: SelectSubset<T, CreativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creatives
     * const creatives = await prisma.creative.findMany()
     * 
     * // Get first 10 Creatives
     * const creatives = await prisma.creative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creativeWithIdOnly = await prisma.creative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreativeFindManyArgs>(args?: SelectSubset<T, CreativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creative.
     * @param {CreativeCreateArgs} args - Arguments to create a Creative.
     * @example
     * // Create one Creative
     * const Creative = await prisma.creative.create({
     *   data: {
     *     // ... data to create a Creative
     *   }
     * })
     * 
     */
    create<T extends CreativeCreateArgs>(args: SelectSubset<T, CreativeCreateArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creatives.
     * @param {CreativeCreateManyArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creative = await prisma.creative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreativeCreateManyArgs>(args?: SelectSubset<T, CreativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creatives and returns the data saved in the database.
     * @param {CreativeCreateManyAndReturnArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creative = await prisma.creative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creatives and only return the `id`
     * const creativeWithIdOnly = await prisma.creative.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreativeCreateManyAndReturnArgs>(args?: SelectSubset<T, CreativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creative.
     * @param {CreativeDeleteArgs} args - Arguments to delete one Creative.
     * @example
     * // Delete one Creative
     * const Creative = await prisma.creative.delete({
     *   where: {
     *     // ... filter to delete one Creative
     *   }
     * })
     * 
     */
    delete<T extends CreativeDeleteArgs>(args: SelectSubset<T, CreativeDeleteArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creative.
     * @param {CreativeUpdateArgs} args - Arguments to update one Creative.
     * @example
     * // Update one Creative
     * const creative = await prisma.creative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreativeUpdateArgs>(args: SelectSubset<T, CreativeUpdateArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creatives.
     * @param {CreativeDeleteManyArgs} args - Arguments to filter Creatives to delete.
     * @example
     * // Delete a few Creatives
     * const { count } = await prisma.creative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreativeDeleteManyArgs>(args?: SelectSubset<T, CreativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creatives
     * const creative = await prisma.creative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreativeUpdateManyArgs>(args: SelectSubset<T, CreativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives and returns the data updated in the database.
     * @param {CreativeUpdateManyAndReturnArgs} args - Arguments to update many Creatives.
     * @example
     * // Update many Creatives
     * const creative = await prisma.creative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creatives and only return the `id`
     * const creativeWithIdOnly = await prisma.creative.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreativeUpdateManyAndReturnArgs>(args: SelectSubset<T, CreativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creative.
     * @param {CreativeUpsertArgs} args - Arguments to update or create a Creative.
     * @example
     * // Update or create a Creative
     * const creative = await prisma.creative.upsert({
     *   create: {
     *     // ... data to create a Creative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creative we want to update
     *   }
     * })
     */
    upsert<T extends CreativeUpsertArgs>(args: SelectSubset<T, CreativeUpsertArgs<ExtArgs>>): Prisma__CreativeClient<$Result.GetResult<Prisma.$CreativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeCountArgs} args - Arguments to filter Creatives to count.
     * @example
     * // Count the number of Creatives
     * const count = await prisma.creative.count({
     *   where: {
     *     // ... the filter for the Creatives we want to count
     *   }
     * })
    **/
    count<T extends CreativeCountArgs>(
      args?: Subset<T, CreativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreativeAggregateArgs>(args: Subset<T, CreativeAggregateArgs>): Prisma.PrismaPromise<GetCreativeAggregateType<T>>

    /**
     * Group by Creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreativeGroupByArgs['orderBy'] }
        : { orderBy?: CreativeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Creative model
   */
  readonly fields: CreativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Creative model
   */
  interface CreativeFieldRefs {
    readonly id: FieldRef<"Creative", 'String'>
    readonly bookingId: FieldRef<"Creative", 'String'>
    readonly imageUrl: FieldRef<"Creative", 'String'>
    readonly width: FieldRef<"Creative", 'Int'>
    readonly height: FieldRef<"Creative", 'Int'>
    readonly fileSizeBytes: FieldRef<"Creative", 'Int'>
    readonly moderationStatus: FieldRef<"Creative", 'ModerationStatus'>
    readonly rejectionReason: FieldRef<"Creative", 'String'>
    readonly uploadedAt: FieldRef<"Creative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Creative findUnique
   */
  export type CreativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative findUniqueOrThrow
   */
  export type CreativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative findFirst
   */
  export type CreativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creatives.
     */
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative findFirstOrThrow
   */
  export type CreativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creative to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creatives.
     */
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative findMany
   */
  export type CreativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter, which Creatives to fetch.
     */
    where?: CreativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creatives to fetch.
     */
    orderBy?: CreativeOrderByWithRelationInput | CreativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creatives.
     */
    cursor?: CreativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creatives.
     */
    skip?: number
    distinct?: CreativeScalarFieldEnum | CreativeScalarFieldEnum[]
  }

  /**
   * Creative create
   */
  export type CreativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Creative.
     */
    data: XOR<CreativeCreateInput, CreativeUncheckedCreateInput>
  }

  /**
   * Creative createMany
   */
  export type CreativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creatives.
     */
    data: CreativeCreateManyInput | CreativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Creative createManyAndReturn
   */
  export type CreativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * The data used to create many Creatives.
     */
    data: CreativeCreateManyInput | CreativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creative update
   */
  export type CreativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Creative.
     */
    data: XOR<CreativeUpdateInput, CreativeUncheckedUpdateInput>
    /**
     * Choose, which Creative to update.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative updateMany
   */
  export type CreativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Creatives.
     */
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyInput>
    /**
     * Filter which Creatives to update
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to update.
     */
    limit?: number
  }

  /**
   * Creative updateManyAndReturn
   */
  export type CreativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * The data used to update Creatives.
     */
    data: XOR<CreativeUpdateManyMutationInput, CreativeUncheckedUpdateManyInput>
    /**
     * Filter which Creatives to update
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creative upsert
   */
  export type CreativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Creative to update in case it exists.
     */
    where: CreativeWhereUniqueInput
    /**
     * In case the Creative found by the `where` argument doesn't exist, create a new Creative with this data.
     */
    create: XOR<CreativeCreateInput, CreativeUncheckedCreateInput>
    /**
     * In case the Creative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreativeUpdateInput, CreativeUncheckedUpdateInput>
  }

  /**
   * Creative delete
   */
  export type CreativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
    /**
     * Filter which Creative to delete.
     */
    where: CreativeWhereUniqueInput
  }

  /**
   * Creative deleteMany
   */
  export type CreativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creatives to delete
     */
    where?: CreativeWhereInput
    /**
     * Limit how many Creatives to delete.
     */
    limit?: number
  }

  /**
   * Creative without action
   */
  export type CreativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creative
     */
    select?: CreativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creative
     */
    omit?: CreativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreativeInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: Decimal | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: Decimal | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    bookingId: string
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: Decimal
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "razorpayOrderId" | "razorpayPaymentId" | "amount" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      amount: Prisma.Decimal
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly bookingId: FieldRef<"Payment", 'String'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model SlotOccupancy
   */

  export type AggregateSlotOccupancy = {
    _count: SlotOccupancyCountAggregateOutputType | null
    _avg: SlotOccupancyAvgAggregateOutputType | null
    _sum: SlotOccupancySumAggregateOutputType | null
    _min: SlotOccupancyMinAggregateOutputType | null
    _max: SlotOccupancyMaxAggregateOutputType | null
  }

  export type SlotOccupancyAvgAggregateOutputType = {
    slotIndex: number | null
  }

  export type SlotOccupancySumAggregateOutputType = {
    slotIndex: number | null
  }

  export type SlotOccupancyMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    bookingId: string | null
    slotIndex: number | null
    playDate: Date | null
  }

  export type SlotOccupancyMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    bookingId: string | null
    slotIndex: number | null
    playDate: Date | null
  }

  export type SlotOccupancyCountAggregateOutputType = {
    id: number
    deviceId: number
    bookingId: number
    slotIndex: number
    playDate: number
    _all: number
  }


  export type SlotOccupancyAvgAggregateInputType = {
    slotIndex?: true
  }

  export type SlotOccupancySumAggregateInputType = {
    slotIndex?: true
  }

  export type SlotOccupancyMinAggregateInputType = {
    id?: true
    deviceId?: true
    bookingId?: true
    slotIndex?: true
    playDate?: true
  }

  export type SlotOccupancyMaxAggregateInputType = {
    id?: true
    deviceId?: true
    bookingId?: true
    slotIndex?: true
    playDate?: true
  }

  export type SlotOccupancyCountAggregateInputType = {
    id?: true
    deviceId?: true
    bookingId?: true
    slotIndex?: true
    playDate?: true
    _all?: true
  }

  export type SlotOccupancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotOccupancy to aggregate.
     */
    where?: SlotOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOccupancies to fetch.
     */
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlotOccupancies
    **/
    _count?: true | SlotOccupancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotOccupancyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotOccupancySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotOccupancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotOccupancyMaxAggregateInputType
  }

  export type GetSlotOccupancyAggregateType<T extends SlotOccupancyAggregateArgs> = {
        [P in keyof T & keyof AggregateSlotOccupancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlotOccupancy[P]>
      : GetScalarType<T[P], AggregateSlotOccupancy[P]>
  }




  export type SlotOccupancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotOccupancyWhereInput
    orderBy?: SlotOccupancyOrderByWithAggregationInput | SlotOccupancyOrderByWithAggregationInput[]
    by: SlotOccupancyScalarFieldEnum[] | SlotOccupancyScalarFieldEnum
    having?: SlotOccupancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotOccupancyCountAggregateInputType | true
    _avg?: SlotOccupancyAvgAggregateInputType
    _sum?: SlotOccupancySumAggregateInputType
    _min?: SlotOccupancyMinAggregateInputType
    _max?: SlotOccupancyMaxAggregateInputType
  }

  export type SlotOccupancyGroupByOutputType = {
    id: string
    deviceId: string
    bookingId: string
    slotIndex: number
    playDate: Date
    _count: SlotOccupancyCountAggregateOutputType | null
    _avg: SlotOccupancyAvgAggregateOutputType | null
    _sum: SlotOccupancySumAggregateOutputType | null
    _min: SlotOccupancyMinAggregateOutputType | null
    _max: SlotOccupancyMaxAggregateOutputType | null
  }

  type GetSlotOccupancyGroupByPayload<T extends SlotOccupancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotOccupancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotOccupancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotOccupancyGroupByOutputType[P]>
            : GetScalarType<T[P], SlotOccupancyGroupByOutputType[P]>
        }
      >
    >


  export type SlotOccupancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    bookingId?: boolean
    slotIndex?: boolean
    playDate?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotOccupancy"]>

  export type SlotOccupancySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    bookingId?: boolean
    slotIndex?: boolean
    playDate?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotOccupancy"]>

  export type SlotOccupancySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    bookingId?: boolean
    slotIndex?: boolean
    playDate?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotOccupancy"]>

  export type SlotOccupancySelectScalar = {
    id?: boolean
    deviceId?: boolean
    bookingId?: boolean
    slotIndex?: boolean
    playDate?: boolean
  }

  export type SlotOccupancyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "bookingId" | "slotIndex" | "playDate", ExtArgs["result"]["slotOccupancy"]>
  export type SlotOccupancyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type SlotOccupancyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type SlotOccupancyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $SlotOccupancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlotOccupancy"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      bookingId: string
      slotIndex: number
      playDate: Date
    }, ExtArgs["result"]["slotOccupancy"]>
    composites: {}
  }

  type SlotOccupancyGetPayload<S extends boolean | null | undefined | SlotOccupancyDefaultArgs> = $Result.GetResult<Prisma.$SlotOccupancyPayload, S>

  type SlotOccupancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotOccupancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotOccupancyCountAggregateInputType | true
    }

  export interface SlotOccupancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlotOccupancy'], meta: { name: 'SlotOccupancy' } }
    /**
     * Find zero or one SlotOccupancy that matches the filter.
     * @param {SlotOccupancyFindUniqueArgs} args - Arguments to find a SlotOccupancy
     * @example
     * // Get one SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotOccupancyFindUniqueArgs>(args: SelectSubset<T, SlotOccupancyFindUniqueArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlotOccupancy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotOccupancyFindUniqueOrThrowArgs} args - Arguments to find a SlotOccupancy
     * @example
     * // Get one SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotOccupancyFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotOccupancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotOccupancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyFindFirstArgs} args - Arguments to find a SlotOccupancy
     * @example
     * // Get one SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotOccupancyFindFirstArgs>(args?: SelectSubset<T, SlotOccupancyFindFirstArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotOccupancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyFindFirstOrThrowArgs} args - Arguments to find a SlotOccupancy
     * @example
     * // Get one SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotOccupancyFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotOccupancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlotOccupancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlotOccupancies
     * const slotOccupancies = await prisma.slotOccupancy.findMany()
     * 
     * // Get first 10 SlotOccupancies
     * const slotOccupancies = await prisma.slotOccupancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotOccupancyWithIdOnly = await prisma.slotOccupancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotOccupancyFindManyArgs>(args?: SelectSubset<T, SlotOccupancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlotOccupancy.
     * @param {SlotOccupancyCreateArgs} args - Arguments to create a SlotOccupancy.
     * @example
     * // Create one SlotOccupancy
     * const SlotOccupancy = await prisma.slotOccupancy.create({
     *   data: {
     *     // ... data to create a SlotOccupancy
     *   }
     * })
     * 
     */
    create<T extends SlotOccupancyCreateArgs>(args: SelectSubset<T, SlotOccupancyCreateArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlotOccupancies.
     * @param {SlotOccupancyCreateManyArgs} args - Arguments to create many SlotOccupancies.
     * @example
     * // Create many SlotOccupancies
     * const slotOccupancy = await prisma.slotOccupancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotOccupancyCreateManyArgs>(args?: SelectSubset<T, SlotOccupancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlotOccupancies and returns the data saved in the database.
     * @param {SlotOccupancyCreateManyAndReturnArgs} args - Arguments to create many SlotOccupancies.
     * @example
     * // Create many SlotOccupancies
     * const slotOccupancy = await prisma.slotOccupancy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlotOccupancies and only return the `id`
     * const slotOccupancyWithIdOnly = await prisma.slotOccupancy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotOccupancyCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotOccupancyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlotOccupancy.
     * @param {SlotOccupancyDeleteArgs} args - Arguments to delete one SlotOccupancy.
     * @example
     * // Delete one SlotOccupancy
     * const SlotOccupancy = await prisma.slotOccupancy.delete({
     *   where: {
     *     // ... filter to delete one SlotOccupancy
     *   }
     * })
     * 
     */
    delete<T extends SlotOccupancyDeleteArgs>(args: SelectSubset<T, SlotOccupancyDeleteArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlotOccupancy.
     * @param {SlotOccupancyUpdateArgs} args - Arguments to update one SlotOccupancy.
     * @example
     * // Update one SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotOccupancyUpdateArgs>(args: SelectSubset<T, SlotOccupancyUpdateArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlotOccupancies.
     * @param {SlotOccupancyDeleteManyArgs} args - Arguments to filter SlotOccupancies to delete.
     * @example
     * // Delete a few SlotOccupancies
     * const { count } = await prisma.slotOccupancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotOccupancyDeleteManyArgs>(args?: SelectSubset<T, SlotOccupancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotOccupancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlotOccupancies
     * const slotOccupancy = await prisma.slotOccupancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotOccupancyUpdateManyArgs>(args: SelectSubset<T, SlotOccupancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotOccupancies and returns the data updated in the database.
     * @param {SlotOccupancyUpdateManyAndReturnArgs} args - Arguments to update many SlotOccupancies.
     * @example
     * // Update many SlotOccupancies
     * const slotOccupancy = await prisma.slotOccupancy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlotOccupancies and only return the `id`
     * const slotOccupancyWithIdOnly = await prisma.slotOccupancy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlotOccupancyUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotOccupancyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlotOccupancy.
     * @param {SlotOccupancyUpsertArgs} args - Arguments to update or create a SlotOccupancy.
     * @example
     * // Update or create a SlotOccupancy
     * const slotOccupancy = await prisma.slotOccupancy.upsert({
     *   create: {
     *     // ... data to create a SlotOccupancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlotOccupancy we want to update
     *   }
     * })
     */
    upsert<T extends SlotOccupancyUpsertArgs>(args: SelectSubset<T, SlotOccupancyUpsertArgs<ExtArgs>>): Prisma__SlotOccupancyClient<$Result.GetResult<Prisma.$SlotOccupancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlotOccupancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyCountArgs} args - Arguments to filter SlotOccupancies to count.
     * @example
     * // Count the number of SlotOccupancies
     * const count = await prisma.slotOccupancy.count({
     *   where: {
     *     // ... the filter for the SlotOccupancies we want to count
     *   }
     * })
    **/
    count<T extends SlotOccupancyCountArgs>(
      args?: Subset<T, SlotOccupancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotOccupancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlotOccupancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotOccupancyAggregateArgs>(args: Subset<T, SlotOccupancyAggregateArgs>): Prisma.PrismaPromise<GetSlotOccupancyAggregateType<T>>

    /**
     * Group by SlotOccupancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotOccupancyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotOccupancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotOccupancyGroupByArgs['orderBy'] }
        : { orderBy?: SlotOccupancyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotOccupancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotOccupancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlotOccupancy model
   */
  readonly fields: SlotOccupancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlotOccupancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotOccupancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SlotOccupancy model
   */
  interface SlotOccupancyFieldRefs {
    readonly id: FieldRef<"SlotOccupancy", 'String'>
    readonly deviceId: FieldRef<"SlotOccupancy", 'String'>
    readonly bookingId: FieldRef<"SlotOccupancy", 'String'>
    readonly slotIndex: FieldRef<"SlotOccupancy", 'Int'>
    readonly playDate: FieldRef<"SlotOccupancy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlotOccupancy findUnique
   */
  export type SlotOccupancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which SlotOccupancy to fetch.
     */
    where: SlotOccupancyWhereUniqueInput
  }

  /**
   * SlotOccupancy findUniqueOrThrow
   */
  export type SlotOccupancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which SlotOccupancy to fetch.
     */
    where: SlotOccupancyWhereUniqueInput
  }

  /**
   * SlotOccupancy findFirst
   */
  export type SlotOccupancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which SlotOccupancy to fetch.
     */
    where?: SlotOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOccupancies to fetch.
     */
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotOccupancies.
     */
    cursor?: SlotOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotOccupancies.
     */
    distinct?: SlotOccupancyScalarFieldEnum | SlotOccupancyScalarFieldEnum[]
  }

  /**
   * SlotOccupancy findFirstOrThrow
   */
  export type SlotOccupancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which SlotOccupancy to fetch.
     */
    where?: SlotOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOccupancies to fetch.
     */
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotOccupancies.
     */
    cursor?: SlotOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotOccupancies.
     */
    distinct?: SlotOccupancyScalarFieldEnum | SlotOccupancyScalarFieldEnum[]
  }

  /**
   * SlotOccupancy findMany
   */
  export type SlotOccupancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which SlotOccupancies to fetch.
     */
    where?: SlotOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotOccupancies to fetch.
     */
    orderBy?: SlotOccupancyOrderByWithRelationInput | SlotOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlotOccupancies.
     */
    cursor?: SlotOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotOccupancies.
     */
    skip?: number
    distinct?: SlotOccupancyScalarFieldEnum | SlotOccupancyScalarFieldEnum[]
  }

  /**
   * SlotOccupancy create
   */
  export type SlotOccupancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * The data needed to create a SlotOccupancy.
     */
    data: XOR<SlotOccupancyCreateInput, SlotOccupancyUncheckedCreateInput>
  }

  /**
   * SlotOccupancy createMany
   */
  export type SlotOccupancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlotOccupancies.
     */
    data: SlotOccupancyCreateManyInput | SlotOccupancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlotOccupancy createManyAndReturn
   */
  export type SlotOccupancyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * The data used to create many SlotOccupancies.
     */
    data: SlotOccupancyCreateManyInput | SlotOccupancyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotOccupancy update
   */
  export type SlotOccupancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * The data needed to update a SlotOccupancy.
     */
    data: XOR<SlotOccupancyUpdateInput, SlotOccupancyUncheckedUpdateInput>
    /**
     * Choose, which SlotOccupancy to update.
     */
    where: SlotOccupancyWhereUniqueInput
  }

  /**
   * SlotOccupancy updateMany
   */
  export type SlotOccupancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlotOccupancies.
     */
    data: XOR<SlotOccupancyUpdateManyMutationInput, SlotOccupancyUncheckedUpdateManyInput>
    /**
     * Filter which SlotOccupancies to update
     */
    where?: SlotOccupancyWhereInput
    /**
     * Limit how many SlotOccupancies to update.
     */
    limit?: number
  }

  /**
   * SlotOccupancy updateManyAndReturn
   */
  export type SlotOccupancyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * The data used to update SlotOccupancies.
     */
    data: XOR<SlotOccupancyUpdateManyMutationInput, SlotOccupancyUncheckedUpdateManyInput>
    /**
     * Filter which SlotOccupancies to update
     */
    where?: SlotOccupancyWhereInput
    /**
     * Limit how many SlotOccupancies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotOccupancy upsert
   */
  export type SlotOccupancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * The filter to search for the SlotOccupancy to update in case it exists.
     */
    where: SlotOccupancyWhereUniqueInput
    /**
     * In case the SlotOccupancy found by the `where` argument doesn't exist, create a new SlotOccupancy with this data.
     */
    create: XOR<SlotOccupancyCreateInput, SlotOccupancyUncheckedCreateInput>
    /**
     * In case the SlotOccupancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotOccupancyUpdateInput, SlotOccupancyUncheckedUpdateInput>
  }

  /**
   * SlotOccupancy delete
   */
  export type SlotOccupancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
    /**
     * Filter which SlotOccupancy to delete.
     */
    where: SlotOccupancyWhereUniqueInput
  }

  /**
   * SlotOccupancy deleteMany
   */
  export type SlotOccupancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotOccupancies to delete
     */
    where?: SlotOccupancyWhereInput
    /**
     * Limit how many SlotOccupancies to delete.
     */
    limit?: number
  }

  /**
   * SlotOccupancy without action
   */
  export type SlotOccupancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotOccupancy
     */
    select?: SlotOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotOccupancy
     */
    omit?: SlotOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotOccupancyInclude<ExtArgs> | null
  }


  /**
   * Model BookingEvent
   */

  export type AggregateBookingEvent = {
    _count: BookingEventCountAggregateOutputType | null
    _min: BookingEventMinAggregateOutputType | null
    _max: BookingEventMaxAggregateOutputType | null
  }

  export type BookingEventMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    fromStatus: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus | null
    actor: string | null
    createdAt: Date | null
  }

  export type BookingEventMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    fromStatus: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus | null
    actor: string | null
    createdAt: Date | null
  }

  export type BookingEventCountAggregateOutputType = {
    id: number
    bookingId: number
    fromStatus: number
    toStatus: number
    actor: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type BookingEventMinAggregateInputType = {
    id?: true
    bookingId?: true
    fromStatus?: true
    toStatus?: true
    actor?: true
    createdAt?: true
  }

  export type BookingEventMaxAggregateInputType = {
    id?: true
    bookingId?: true
    fromStatus?: true
    toStatus?: true
    actor?: true
    createdAt?: true
  }

  export type BookingEventCountAggregateInputType = {
    id?: true
    bookingId?: true
    fromStatus?: true
    toStatus?: true
    actor?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type BookingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingEvent to aggregate.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingEvents
    **/
    _count?: true | BookingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingEventMaxAggregateInputType
  }

  export type GetBookingEventAggregateType<T extends BookingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingEvent[P]>
      : GetScalarType<T[P], AggregateBookingEvent[P]>
  }




  export type BookingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingEventWhereInput
    orderBy?: BookingEventOrderByWithAggregationInput | BookingEventOrderByWithAggregationInput[]
    by: BookingEventScalarFieldEnum[] | BookingEventScalarFieldEnum
    having?: BookingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingEventCountAggregateInputType | true
    _min?: BookingEventMinAggregateInputType
    _max?: BookingEventMaxAggregateInputType
  }

  export type BookingEventGroupByOutputType = {
    id: string
    bookingId: string
    fromStatus: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata: JsonValue | null
    createdAt: Date
    _count: BookingEventCountAggregateOutputType | null
    _min: BookingEventMinAggregateOutputType | null
    _max: BookingEventMaxAggregateOutputType | null
  }

  type GetBookingEventGroupByPayload<T extends BookingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingEventGroupByOutputType[P]>
            : GetScalarType<T[P], BookingEventGroupByOutputType[P]>
        }
      >
    >


  export type BookingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actor?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actor?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actor?: boolean
    metadata?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingEvent"]>

  export type BookingEventSelectScalar = {
    id?: boolean
    bookingId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actor?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type BookingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "fromStatus" | "toStatus" | "actor" | "metadata" | "createdAt", ExtArgs["result"]["bookingEvent"]>
  export type BookingEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingEvent"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      fromStatus: $Enums.BookingStatus | null
      toStatus: $Enums.BookingStatus
      actor: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["bookingEvent"]>
    composites: {}
  }

  type BookingEventGetPayload<S extends boolean | null | undefined | BookingEventDefaultArgs> = $Result.GetResult<Prisma.$BookingEventPayload, S>

  type BookingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingEventCountAggregateInputType | true
    }

  export interface BookingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingEvent'], meta: { name: 'BookingEvent' } }
    /**
     * Find zero or one BookingEvent that matches the filter.
     * @param {BookingEventFindUniqueArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingEventFindUniqueArgs>(args: SelectSubset<T, BookingEventFindUniqueArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingEventFindUniqueOrThrowArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindFirstArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingEventFindFirstArgs>(args?: SelectSubset<T, BookingEventFindFirstArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindFirstOrThrowArgs} args - Arguments to find a BookingEvent
     * @example
     * // Get one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingEvents
     * const bookingEvents = await prisma.bookingEvent.findMany()
     * 
     * // Get first 10 BookingEvents
     * const bookingEvents = await prisma.bookingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingEventFindManyArgs>(args?: SelectSubset<T, BookingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingEvent.
     * @param {BookingEventCreateArgs} args - Arguments to create a BookingEvent.
     * @example
     * // Create one BookingEvent
     * const BookingEvent = await prisma.bookingEvent.create({
     *   data: {
     *     // ... data to create a BookingEvent
     *   }
     * })
     * 
     */
    create<T extends BookingEventCreateArgs>(args: SelectSubset<T, BookingEventCreateArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingEvents.
     * @param {BookingEventCreateManyArgs} args - Arguments to create many BookingEvents.
     * @example
     * // Create many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingEventCreateManyArgs>(args?: SelectSubset<T, BookingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingEvents and returns the data saved in the database.
     * @param {BookingEventCreateManyAndReturnArgs} args - Arguments to create many BookingEvents.
     * @example
     * // Create many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingEvents and only return the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingEvent.
     * @param {BookingEventDeleteArgs} args - Arguments to delete one BookingEvent.
     * @example
     * // Delete one BookingEvent
     * const BookingEvent = await prisma.bookingEvent.delete({
     *   where: {
     *     // ... filter to delete one BookingEvent
     *   }
     * })
     * 
     */
    delete<T extends BookingEventDeleteArgs>(args: SelectSubset<T, BookingEventDeleteArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingEvent.
     * @param {BookingEventUpdateArgs} args - Arguments to update one BookingEvent.
     * @example
     * // Update one BookingEvent
     * const bookingEvent = await prisma.bookingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingEventUpdateArgs>(args: SelectSubset<T, BookingEventUpdateArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingEvents.
     * @param {BookingEventDeleteManyArgs} args - Arguments to filter BookingEvents to delete.
     * @example
     * // Delete a few BookingEvents
     * const { count } = await prisma.bookingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingEventDeleteManyArgs>(args?: SelectSubset<T, BookingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingEventUpdateManyArgs>(args: SelectSubset<T, BookingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingEvents and returns the data updated in the database.
     * @param {BookingEventUpdateManyAndReturnArgs} args - Arguments to update many BookingEvents.
     * @example
     * // Update many BookingEvents
     * const bookingEvent = await prisma.bookingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingEvents and only return the `id`
     * const bookingEventWithIdOnly = await prisma.bookingEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingEvent.
     * @param {BookingEventUpsertArgs} args - Arguments to update or create a BookingEvent.
     * @example
     * // Update or create a BookingEvent
     * const bookingEvent = await prisma.bookingEvent.upsert({
     *   create: {
     *     // ... data to create a BookingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingEvent we want to update
     *   }
     * })
     */
    upsert<T extends BookingEventUpsertArgs>(args: SelectSubset<T, BookingEventUpsertArgs<ExtArgs>>): Prisma__BookingEventClient<$Result.GetResult<Prisma.$BookingEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventCountArgs} args - Arguments to filter BookingEvents to count.
     * @example
     * // Count the number of BookingEvents
     * const count = await prisma.bookingEvent.count({
     *   where: {
     *     // ... the filter for the BookingEvents we want to count
     *   }
     * })
    **/
    count<T extends BookingEventCountArgs>(
      args?: Subset<T, BookingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingEventAggregateArgs>(args: Subset<T, BookingEventAggregateArgs>): Prisma.PrismaPromise<GetBookingEventAggregateType<T>>

    /**
     * Group by BookingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingEventGroupByArgs['orderBy'] }
        : { orderBy?: BookingEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingEvent model
   */
  readonly fields: BookingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingEvent model
   */
  interface BookingEventFieldRefs {
    readonly id: FieldRef<"BookingEvent", 'String'>
    readonly bookingId: FieldRef<"BookingEvent", 'String'>
    readonly fromStatus: FieldRef<"BookingEvent", 'BookingStatus'>
    readonly toStatus: FieldRef<"BookingEvent", 'BookingStatus'>
    readonly actor: FieldRef<"BookingEvent", 'String'>
    readonly metadata: FieldRef<"BookingEvent", 'Json'>
    readonly createdAt: FieldRef<"BookingEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingEvent findUnique
   */
  export type BookingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent findUniqueOrThrow
   */
  export type BookingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent findFirst
   */
  export type BookingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingEvents.
     */
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent findFirstOrThrow
   */
  export type BookingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvent to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingEvents.
     */
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent findMany
   */
  export type BookingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter, which BookingEvents to fetch.
     */
    where?: BookingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingEvents to fetch.
     */
    orderBy?: BookingEventOrderByWithRelationInput | BookingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingEvents.
     */
    cursor?: BookingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingEvents.
     */
    skip?: number
    distinct?: BookingEventScalarFieldEnum | BookingEventScalarFieldEnum[]
  }

  /**
   * BookingEvent create
   */
  export type BookingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingEvent.
     */
    data: XOR<BookingEventCreateInput, BookingEventUncheckedCreateInput>
  }

  /**
   * BookingEvent createMany
   */
  export type BookingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingEvents.
     */
    data: BookingEventCreateManyInput | BookingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingEvent createManyAndReturn
   */
  export type BookingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * The data used to create many BookingEvents.
     */
    data: BookingEventCreateManyInput | BookingEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingEvent update
   */
  export type BookingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingEvent.
     */
    data: XOR<BookingEventUpdateInput, BookingEventUncheckedUpdateInput>
    /**
     * Choose, which BookingEvent to update.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent updateMany
   */
  export type BookingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingEvents.
     */
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyInput>
    /**
     * Filter which BookingEvents to update
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to update.
     */
    limit?: number
  }

  /**
   * BookingEvent updateManyAndReturn
   */
  export type BookingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * The data used to update BookingEvents.
     */
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyInput>
    /**
     * Filter which BookingEvents to update
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingEvent upsert
   */
  export type BookingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingEvent to update in case it exists.
     */
    where: BookingEventWhereUniqueInput
    /**
     * In case the BookingEvent found by the `where` argument doesn't exist, create a new BookingEvent with this data.
     */
    create: XOR<BookingEventCreateInput, BookingEventUncheckedCreateInput>
    /**
     * In case the BookingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingEventUpdateInput, BookingEventUncheckedUpdateInput>
  }

  /**
   * BookingEvent delete
   */
  export type BookingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
    /**
     * Filter which BookingEvent to delete.
     */
    where: BookingEventWhereUniqueInput
  }

  /**
   * BookingEvent deleteMany
   */
  export type BookingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingEvents to delete
     */
    where?: BookingEventWhereInput
    /**
     * Limit how many BookingEvents to delete.
     */
    limit?: number
  }

  /**
   * BookingEvent without action
   */
  export type BookingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingEvent
     */
    select?: BookingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingEvent
     */
    omit?: BookingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    supabaseUserId: 'supabaseUserId',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    revenueModel: 'revenueModel',
    revenueValue: 'revenueValue',
    defaultImageUrl: 'defaultImageUrl',
    status: 'status',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    name: 'name',
    locationLabel: 'locationLabel',
    resolution: 'resolution',
    orientation: 'orientation',
    defaultImageUrl: 'defaultImageUrl',
    slotDayPrice: 'slotDayPrice',
    status: 'status',
    approvalStatus: 'approvalStatus',
    rejectionReason: 'rejectionReason',
    credentialHash: 'credentialHash',
    deviceTokenHash: 'deviceTokenHash',
    lastSeenAt: 'lastSeenAt',
    currentlyShowingSlot: 'currentlyShowingSlot',
    createdAt: 'createdAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceImageScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    imageUrl: 'imageUrl',
    sortOrder: 'sortOrder'
  };

  export type DeviceImageScalarFieldEnum = (typeof DeviceImageScalarFieldEnum)[keyof typeof DeviceImageScalarFieldEnum]


  export const AdvertiserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type AdvertiserScalarFieldEnum = (typeof AdvertiserScalarFieldEnum)[keyof typeof AdvertiserScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    advertiserId: 'advertiserId',
    deviceId: 'deviceId',
    slotIndex: 'slotIndex',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    priceTotal: 'priceTotal',
    venueSplitAmount: 'venueSplitAmount',
    status: 'status',
    holdExpiresAt: 'holdExpiresAt',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CreativeScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    imageUrl: 'imageUrl',
    width: 'width',
    height: 'height',
    fileSizeBytes: 'fileSizeBytes',
    moderationStatus: 'moderationStatus',
    rejectionReason: 'rejectionReason',
    uploadedAt: 'uploadedAt'
  };

  export type CreativeScalarFieldEnum = (typeof CreativeScalarFieldEnum)[keyof typeof CreativeScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SlotOccupancyScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    bookingId: 'bookingId',
    slotIndex: 'slotIndex',
    playDate: 'playDate'
  };

  export type SlotOccupancyScalarFieldEnum = (typeof SlotOccupancyScalarFieldEnum)[keyof typeof SlotOccupancyScalarFieldEnum]


  export const BookingEventScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    actor: 'actor',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type BookingEventScalarFieldEnum = (typeof BookingEventScalarFieldEnum)[keyof typeof BookingEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RevenueModel'
   */
  export type EnumRevenueModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevenueModel'>
    


  /**
   * Reference to a field of type 'RevenueModel[]'
   */
  export type ListEnumRevenueModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevenueModel[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'VenueStatus'
   */
  export type EnumVenueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueStatus'>
    


  /**
   * Reference to a field of type 'VenueStatus[]'
   */
  export type ListEnumVenueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VenueStatus[]'>
    


  /**
   * Reference to a field of type 'DeviceOrientation'
   */
  export type EnumDeviceOrientationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceOrientation'>
    


  /**
   * Reference to a field of type 'DeviceOrientation[]'
   */
  export type ListEnumDeviceOrientationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceOrientation[]'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus[]'
   */
  export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>
    


  /**
   * Reference to a field of type 'DeviceApprovalStatus'
   */
  export type EnumDeviceApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceApprovalStatus'>
    


  /**
   * Reference to a field of type 'DeviceApprovalStatus[]'
   */
  export type ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceApprovalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'ModerationStatus'
   */
  export type EnumModerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationStatus'>
    


  /**
   * Reference to a field of type 'ModerationStatus[]'
   */
  export type ListEnumModerationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModerationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    supabaseUserId?: UuidNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedVenues?: VenueListRelationFilter
    advertiserProfile?: XOR<AdvertiserNullableScalarRelationFilter, AdvertiserWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ownedVenues?: VenueOrderByRelationAggregateInput
    advertiserProfile?: AdvertiserOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedVenues?: VenueListRelationFilter
    advertiserProfile?: XOR<AdvertiserNullableScalarRelationFilter, AdvertiserWhereInput> | null
  }, "id" | "supabaseUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    supabaseUserId?: UuidNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: UuidFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    contactEmail?: StringFilter<"Venue"> | string
    contactPhone?: StringFilter<"Venue"> | string
    revenueModel?: EnumRevenueModelFilter<"Venue"> | $Enums.RevenueModel
    revenueValue?: DecimalFilter<"Venue"> | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFilter<"Venue"> | string
    status?: EnumVenueStatusFilter<"Venue"> | $Enums.VenueStatus
    ownerId?: UuidNullableFilter<"Venue"> | string | null
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    devices?: DeviceListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    revenueModel?: SortOrder
    revenueValue?: SortOrder
    defaultImageUrl?: SortOrder
    status?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    devices?: DeviceOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    contactEmail?: StringFilter<"Venue"> | string
    contactPhone?: StringFilter<"Venue"> | string
    revenueModel?: EnumRevenueModelFilter<"Venue"> | $Enums.RevenueModel
    revenueValue?: DecimalFilter<"Venue"> | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFilter<"Venue"> | string
    status?: EnumVenueStatusFilter<"Venue"> | $Enums.VenueStatus
    ownerId?: UuidNullableFilter<"Venue"> | string | null
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    devices?: DeviceListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    revenueModel?: SortOrder
    revenueValue?: SortOrder
    defaultImageUrl?: SortOrder
    status?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    contactEmail?: StringWithAggregatesFilter<"Venue"> | string
    contactPhone?: StringWithAggregatesFilter<"Venue"> | string
    revenueModel?: EnumRevenueModelWithAggregatesFilter<"Venue"> | $Enums.RevenueModel
    revenueValue?: DecimalWithAggregatesFilter<"Venue"> | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringWithAggregatesFilter<"Venue"> | string
    status?: EnumVenueStatusWithAggregatesFilter<"Venue"> | $Enums.VenueStatus
    ownerId?: UuidNullableWithAggregatesFilter<"Venue"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: UuidFilter<"Device"> | string
    venueId?: UuidFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    locationLabel?: StringFilter<"Device"> | string
    resolution?: StringFilter<"Device"> | string
    orientation?: EnumDeviceOrientationFilter<"Device"> | $Enums.DeviceOrientation
    defaultImageUrl?: StringFilter<"Device"> | string
    slotDayPrice?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFilter<"Device"> | $Enums.DeviceApprovalStatus
    rejectionReason?: StringNullableFilter<"Device"> | string | null
    credentialHash?: StringFilter<"Device"> | string
    deviceTokenHash?: StringNullableFilter<"Device"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    currentlyShowingSlot?: IntNullableFilter<"Device"> | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    bookings?: BookingListRelationFilter
    slotOccupancies?: SlotOccupancyListRelationFilter
    images?: DeviceImageListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    locationLabel?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    defaultImageUrl?: SortOrder
    slotDayPrice?: SortOrder
    status?: SortOrder
    approvalStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    credentialHash?: SortOrder
    deviceTokenHash?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    currentlyShowingSlot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    venue?: VenueOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    slotOccupancies?: SlotOccupancyOrderByRelationAggregateInput
    images?: DeviceImageOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    venueId?: UuidFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    locationLabel?: StringFilter<"Device"> | string
    resolution?: StringFilter<"Device"> | string
    orientation?: EnumDeviceOrientationFilter<"Device"> | $Enums.DeviceOrientation
    defaultImageUrl?: StringFilter<"Device"> | string
    slotDayPrice?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFilter<"Device"> | $Enums.DeviceApprovalStatus
    rejectionReason?: StringNullableFilter<"Device"> | string | null
    credentialHash?: StringFilter<"Device"> | string
    deviceTokenHash?: StringNullableFilter<"Device"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    currentlyShowingSlot?: IntNullableFilter<"Device"> | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    bookings?: BookingListRelationFilter
    slotOccupancies?: SlotOccupancyListRelationFilter
    images?: DeviceImageListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    locationLabel?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    defaultImageUrl?: SortOrder
    slotDayPrice?: SortOrder
    status?: SortOrder
    approvalStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    credentialHash?: SortOrder
    deviceTokenHash?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    currentlyShowingSlot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Device"> | string
    venueId?: UuidWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    locationLabel?: StringWithAggregatesFilter<"Device"> | string
    resolution?: StringWithAggregatesFilter<"Device"> | string
    orientation?: EnumDeviceOrientationWithAggregatesFilter<"Device"> | $Enums.DeviceOrientation
    defaultImageUrl?: StringWithAggregatesFilter<"Device"> | string
    slotDayPrice?: DecimalWithAggregatesFilter<"Device"> | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusWithAggregatesFilter<"Device"> | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusWithAggregatesFilter<"Device"> | $Enums.DeviceApprovalStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"Device"> | string | null
    credentialHash?: StringWithAggregatesFilter<"Device"> | string
    deviceTokenHash?: StringNullableWithAggregatesFilter<"Device"> | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    currentlyShowingSlot?: IntNullableWithAggregatesFilter<"Device"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DeviceImageWhereInput = {
    AND?: DeviceImageWhereInput | DeviceImageWhereInput[]
    OR?: DeviceImageWhereInput[]
    NOT?: DeviceImageWhereInput | DeviceImageWhereInput[]
    id?: UuidFilter<"DeviceImage"> | string
    deviceId?: UuidFilter<"DeviceImage"> | string
    imageUrl?: StringFilter<"DeviceImage"> | string
    sortOrder?: IntFilter<"DeviceImage"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceImageOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceImageWhereInput | DeviceImageWhereInput[]
    OR?: DeviceImageWhereInput[]
    NOT?: DeviceImageWhereInput | DeviceImageWhereInput[]
    deviceId?: UuidFilter<"DeviceImage"> | string
    imageUrl?: StringFilter<"DeviceImage"> | string
    sortOrder?: IntFilter<"DeviceImage"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type DeviceImageOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    _count?: DeviceImageCountOrderByAggregateInput
    _avg?: DeviceImageAvgOrderByAggregateInput
    _max?: DeviceImageMaxOrderByAggregateInput
    _min?: DeviceImageMinOrderByAggregateInput
    _sum?: DeviceImageSumOrderByAggregateInput
  }

  export type DeviceImageScalarWhereWithAggregatesInput = {
    AND?: DeviceImageScalarWhereWithAggregatesInput | DeviceImageScalarWhereWithAggregatesInput[]
    OR?: DeviceImageScalarWhereWithAggregatesInput[]
    NOT?: DeviceImageScalarWhereWithAggregatesInput | DeviceImageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeviceImage"> | string
    deviceId?: UuidWithAggregatesFilter<"DeviceImage"> | string
    imageUrl?: StringWithAggregatesFilter<"DeviceImage"> | string
    sortOrder?: IntWithAggregatesFilter<"DeviceImage"> | number
  }

  export type AdvertiserWhereInput = {
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    id?: UuidFilter<"Advertiser"> | string
    email?: StringFilter<"Advertiser"> | string
    name?: StringFilter<"Advertiser"> | string
    phone?: StringFilter<"Advertiser"> | string
    userId?: UuidNullableFilter<"Advertiser"> | string | null
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookings?: BookingListRelationFilter
  }

  export type AdvertiserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type AdvertiserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: AdvertiserWhereInput | AdvertiserWhereInput[]
    OR?: AdvertiserWhereInput[]
    NOT?: AdvertiserWhereInput | AdvertiserWhereInput[]
    name?: StringFilter<"Advertiser"> | string
    phone?: StringFilter<"Advertiser"> | string
    createdAt?: DateTimeFilter<"Advertiser"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookings?: BookingListRelationFilter
  }, "id" | "email" | "userId">

  export type AdvertiserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdvertiserCountOrderByAggregateInput
    _max?: AdvertiserMaxOrderByAggregateInput
    _min?: AdvertiserMinOrderByAggregateInput
  }

  export type AdvertiserScalarWhereWithAggregatesInput = {
    AND?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    OR?: AdvertiserScalarWhereWithAggregatesInput[]
    NOT?: AdvertiserScalarWhereWithAggregatesInput | AdvertiserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Advertiser"> | string
    email?: StringWithAggregatesFilter<"Advertiser"> | string
    name?: StringWithAggregatesFilter<"Advertiser"> | string
    phone?: StringWithAggregatesFilter<"Advertiser"> | string
    userId?: UuidNullableWithAggregatesFilter<"Advertiser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Advertiser"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: UuidFilter<"Booking"> | string
    advertiserId?: UuidFilter<"Booking"> | string
    deviceId?: UuidFilter<"Booking"> | string
    slotIndex?: IntFilter<"Booking"> | number
    dateStart?: DateTimeFilter<"Booking"> | Date | string
    dateEnd?: DateTimeFilter<"Booking"> | Date | string
    priceTotal?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    creative?: XOR<CreativeNullableScalarRelationFilter, CreativeWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    slotOccupancies?: SlotOccupancyListRelationFilter
    events?: BookingEventListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    deviceId?: SortOrder
    slotIndex?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
    status?: SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    advertiser?: AdvertiserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
    creative?: CreativeOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    slotOccupancies?: SlotOccupancyOrderByRelationAggregateInput
    events?: BookingEventOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    advertiserId?: UuidFilter<"Booking"> | string
    deviceId?: UuidFilter<"Booking"> | string
    slotIndex?: IntFilter<"Booking"> | number
    dateStart?: DateTimeFilter<"Booking"> | Date | string
    dateEnd?: DateTimeFilter<"Booking"> | Date | string
    priceTotal?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    advertiser?: XOR<AdvertiserScalarRelationFilter, AdvertiserWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    creative?: XOR<CreativeNullableScalarRelationFilter, CreativeWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    slotOccupancies?: SlotOccupancyListRelationFilter
    events?: BookingEventListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    deviceId?: SortOrder
    slotIndex?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
    status?: SortOrder
    holdExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Booking"> | string
    advertiserId?: UuidWithAggregatesFilter<"Booking"> | string
    deviceId?: UuidWithAggregatesFilter<"Booking"> | string
    slotIndex?: IntWithAggregatesFilter<"Booking"> | number
    dateStart?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    priceTotal?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    holdExpiresAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CreativeWhereInput = {
    AND?: CreativeWhereInput | CreativeWhereInput[]
    OR?: CreativeWhereInput[]
    NOT?: CreativeWhereInput | CreativeWhereInput[]
    id?: UuidFilter<"Creative"> | string
    bookingId?: UuidFilter<"Creative"> | string
    imageUrl?: StringFilter<"Creative"> | string
    width?: IntFilter<"Creative"> | number
    height?: IntFilter<"Creative"> | number
    fileSizeBytes?: IntFilter<"Creative"> | number
    moderationStatus?: EnumModerationStatusFilter<"Creative"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableFilter<"Creative"> | string | null
    uploadedAt?: DateTimeFilter<"Creative"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type CreativeOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
    moderationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type CreativeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: CreativeWhereInput | CreativeWhereInput[]
    OR?: CreativeWhereInput[]
    NOT?: CreativeWhereInput | CreativeWhereInput[]
    imageUrl?: StringFilter<"Creative"> | string
    width?: IntFilter<"Creative"> | number
    height?: IntFilter<"Creative"> | number
    fileSizeBytes?: IntFilter<"Creative"> | number
    moderationStatus?: EnumModerationStatusFilter<"Creative"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableFilter<"Creative"> | string | null
    uploadedAt?: DateTimeFilter<"Creative"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type CreativeOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
    moderationStatus?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: CreativeCountOrderByAggregateInput
    _avg?: CreativeAvgOrderByAggregateInput
    _max?: CreativeMaxOrderByAggregateInput
    _min?: CreativeMinOrderByAggregateInput
    _sum?: CreativeSumOrderByAggregateInput
  }

  export type CreativeScalarWhereWithAggregatesInput = {
    AND?: CreativeScalarWhereWithAggregatesInput | CreativeScalarWhereWithAggregatesInput[]
    OR?: CreativeScalarWhereWithAggregatesInput[]
    NOT?: CreativeScalarWhereWithAggregatesInput | CreativeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Creative"> | string
    bookingId?: UuidWithAggregatesFilter<"Creative"> | string
    imageUrl?: StringWithAggregatesFilter<"Creative"> | string
    width?: IntWithAggregatesFilter<"Creative"> | number
    height?: IntWithAggregatesFilter<"Creative"> | number
    fileSizeBytes?: IntWithAggregatesFilter<"Creative"> | number
    moderationStatus?: EnumModerationStatusWithAggregatesFilter<"Creative"> | $Enums.ModerationStatus
    rejectionReason?: StringNullableWithAggregatesFilter<"Creative"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Creative"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<"Payment"> | string
    bookingId?: UuidFilter<"Payment"> | string
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    razorpayPaymentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId" | "razorpayPaymentId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payment"> | string
    bookingId?: UuidWithAggregatesFilter<"Payment"> | string
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SlotOccupancyWhereInput = {
    AND?: SlotOccupancyWhereInput | SlotOccupancyWhereInput[]
    OR?: SlotOccupancyWhereInput[]
    NOT?: SlotOccupancyWhereInput | SlotOccupancyWhereInput[]
    id?: UuidFilter<"SlotOccupancy"> | string
    deviceId?: UuidFilter<"SlotOccupancy"> | string
    bookingId?: UuidFilter<"SlotOccupancy"> | string
    slotIndex?: IntFilter<"SlotOccupancy"> | number
    playDate?: DateTimeFilter<"SlotOccupancy"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type SlotOccupancyOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    bookingId?: SortOrder
    slotIndex?: SortOrder
    playDate?: SortOrder
    device?: DeviceOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
  }

  export type SlotOccupancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId_slotIndex_playDate?: SlotOccupancyDeviceIdSlotIndexPlayDateCompoundUniqueInput
    AND?: SlotOccupancyWhereInput | SlotOccupancyWhereInput[]
    OR?: SlotOccupancyWhereInput[]
    NOT?: SlotOccupancyWhereInput | SlotOccupancyWhereInput[]
    deviceId?: UuidFilter<"SlotOccupancy"> | string
    bookingId?: UuidFilter<"SlotOccupancy"> | string
    slotIndex?: IntFilter<"SlotOccupancy"> | number
    playDate?: DateTimeFilter<"SlotOccupancy"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "deviceId_slotIndex_playDate">

  export type SlotOccupancyOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    bookingId?: SortOrder
    slotIndex?: SortOrder
    playDate?: SortOrder
    _count?: SlotOccupancyCountOrderByAggregateInput
    _avg?: SlotOccupancyAvgOrderByAggregateInput
    _max?: SlotOccupancyMaxOrderByAggregateInput
    _min?: SlotOccupancyMinOrderByAggregateInput
    _sum?: SlotOccupancySumOrderByAggregateInput
  }

  export type SlotOccupancyScalarWhereWithAggregatesInput = {
    AND?: SlotOccupancyScalarWhereWithAggregatesInput | SlotOccupancyScalarWhereWithAggregatesInput[]
    OR?: SlotOccupancyScalarWhereWithAggregatesInput[]
    NOT?: SlotOccupancyScalarWhereWithAggregatesInput | SlotOccupancyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SlotOccupancy"> | string
    deviceId?: UuidWithAggregatesFilter<"SlotOccupancy"> | string
    bookingId?: UuidWithAggregatesFilter<"SlotOccupancy"> | string
    slotIndex?: IntWithAggregatesFilter<"SlotOccupancy"> | number
    playDate?: DateTimeWithAggregatesFilter<"SlotOccupancy"> | Date | string
  }

  export type BookingEventWhereInput = {
    AND?: BookingEventWhereInput | BookingEventWhereInput[]
    OR?: BookingEventWhereInput[]
    NOT?: BookingEventWhereInput | BookingEventWhereInput[]
    id?: UuidFilter<"BookingEvent"> | string
    bookingId?: UuidFilter<"BookingEvent"> | string
    fromStatus?: EnumBookingStatusNullableFilter<"BookingEvent"> | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFilter<"BookingEvent"> | $Enums.BookingStatus
    actor?: StringFilter<"BookingEvent"> | string
    metadata?: JsonNullableFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BookingEventOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    actor?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingEventWhereInput | BookingEventWhereInput[]
    OR?: BookingEventWhereInput[]
    NOT?: BookingEventWhereInput | BookingEventWhereInput[]
    bookingId?: UuidFilter<"BookingEvent"> | string
    fromStatus?: EnumBookingStatusNullableFilter<"BookingEvent"> | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFilter<"BookingEvent"> | $Enums.BookingStatus
    actor?: StringFilter<"BookingEvent"> | string
    metadata?: JsonNullableFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingEventOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    actor?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingEventCountOrderByAggregateInput
    _max?: BookingEventMaxOrderByAggregateInput
    _min?: BookingEventMinOrderByAggregateInput
  }

  export type BookingEventScalarWhereWithAggregatesInput = {
    AND?: BookingEventScalarWhereWithAggregatesInput | BookingEventScalarWhereWithAggregatesInput[]
    OR?: BookingEventScalarWhereWithAggregatesInput[]
    NOT?: BookingEventScalarWhereWithAggregatesInput | BookingEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingEvent"> | string
    bookingId?: UuidWithAggregatesFilter<"BookingEvent"> | string
    fromStatus?: EnumBookingStatusNullableWithAggregatesFilter<"BookingEvent"> | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusWithAggregatesFilter<"BookingEvent"> | $Enums.BookingStatus
    actor?: StringWithAggregatesFilter<"BookingEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"BookingEvent">
    createdAt?: DateTimeWithAggregatesFilter<"BookingEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    ownedVenues?: VenueCreateNestedManyWithoutOwnerInput
    advertiserProfile?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    ownedVenues?: VenueUncheckedCreateNestedManyWithoutOwnerInput
    advertiserProfile?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedVenues?: VenueUpdateManyWithoutOwnerNestedInput
    advertiserProfile?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedVenues?: VenueUncheckedUpdateManyWithoutOwnerNestedInput
    advertiserProfile?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedVenuesInput
    devices?: DeviceCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    ownerId?: string | null
    createdAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedVenuesNestedInput
    devices?: DeviceUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    ownerId?: string | null
    createdAt?: Date | string
  }

  export type VenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutDevicesInput
    bookings?: BookingCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutDeviceInput
    images?: DeviceImageCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutDeviceInput
    images?: DeviceImageUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutDevicesNestedInput
    bookings?: BookingUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceImageCreateInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
    device: DeviceCreateNestedOneWithoutImagesInput
  }

  export type DeviceImageUncheckedCreateInput = {
    id?: string
    deviceId: string
    imageUrl: string
    sortOrder?: number
  }

  export type DeviceImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    device?: DeviceUpdateOneRequiredWithoutImagesNestedInput
  }

  export type DeviceImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceImageCreateManyInput = {
    id?: string
    deviceId: string
    imageUrl: string
    sortOrder?: number
  }

  export type DeviceImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type AdvertiserCreateInput = {
    id?: string
    email: string
    name: string
    phone: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAdvertiserProfileInput
    bookings?: BookingCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    phone: string
    userId?: string | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAdvertiserProfileNestedInput
    bookings?: BookingUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserCreateManyInput = {
    id?: string
    email: string
    name: string
    phone: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type AdvertiserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvertiserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    device: DeviceCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateInput = {
    id?: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
    booking: BookingCreateNestedOneWithoutCreativeInput
  }

  export type CreativeUncheckedCreateInput = {
    id?: string
    bookingId: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type CreativeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutCreativeNestedInput
  }

  export type CreativeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeCreateManyInput = {
    id?: string
    bookingId: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type CreativeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    bookingId: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    bookingId: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyCreateInput = {
    id?: string
    slotIndex: number
    playDate: Date | string
    device: DeviceCreateNestedOneWithoutSlotOccupanciesInput
    booking: BookingCreateNestedOneWithoutSlotOccupanciesInput
  }

  export type SlotOccupancyUncheckedCreateInput = {
    id?: string
    deviceId: string
    bookingId: string
    slotIndex: number
    playDate: Date | string
  }

  export type SlotOccupancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSlotOccupanciesNestedInput
    booking?: BookingUpdateOneRequiredWithoutSlotOccupanciesNestedInput
  }

  export type SlotOccupancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyCreateManyInput = {
    id?: string
    deviceId: string
    bookingId: string
    slotIndex: number
    playDate: Date | string
  }

  export type SlotOccupancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventCreateInput = {
    id?: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutEventsInput
  }

  export type BookingEventUncheckedCreateInput = {
    id?: string
    bookingId: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutEventsNestedInput
  }

  export type BookingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventCreateManyInput = {
    id?: string
    bookingId: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VenueListRelationFilter = {
    every?: VenueWhereInput
    some?: VenueWhereInput
    none?: VenueWhereInput
  }

  export type AdvertiserNullableScalarRelationFilter = {
    is?: AdvertiserWhereInput | null
    isNot?: AdvertiserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseUserId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRevenueModelFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenueModel | EnumRevenueModelFieldRefInput<$PrismaModel>
    in?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenueModelFilter<$PrismaModel> | $Enums.RevenueModel
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumVenueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueStatus | EnumVenueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueStatusFilter<$PrismaModel> | $Enums.VenueStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    revenueModel?: SortOrder
    revenueValue?: SortOrder
    defaultImageUrl?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    revenueValue?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    revenueModel?: SortOrder
    revenueValue?: SortOrder
    defaultImageUrl?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    revenueModel?: SortOrder
    revenueValue?: SortOrder
    defaultImageUrl?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    revenueValue?: SortOrder
  }

  export type EnumRevenueModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenueModel | EnumRevenueModelFieldRefInput<$PrismaModel>
    in?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenueModelWithAggregatesFilter<$PrismaModel> | $Enums.RevenueModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevenueModelFilter<$PrismaModel>
    _max?: NestedEnumRevenueModelFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumVenueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueStatus | EnumVenueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueStatusWithAggregatesFilter<$PrismaModel> | $Enums.VenueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueStatusFilter<$PrismaModel>
    _max?: NestedEnumVenueStatusFilter<$PrismaModel>
  }

  export type EnumDeviceOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceOrientation | EnumDeviceOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceOrientationFilter<$PrismaModel> | $Enums.DeviceOrientation
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type EnumDeviceApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceApprovalStatus | EnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel> | $Enums.DeviceApprovalStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SlotOccupancyListRelationFilter = {
    every?: SlotOccupancyWhereInput
    some?: SlotOccupancyWhereInput
    none?: SlotOccupancyWhereInput
  }

  export type DeviceImageListRelationFilter = {
    every?: DeviceImageWhereInput
    some?: DeviceImageWhereInput
    none?: DeviceImageWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotOccupancyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    locationLabel?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    defaultImageUrl?: SortOrder
    slotDayPrice?: SortOrder
    status?: SortOrder
    approvalStatus?: SortOrder
    rejectionReason?: SortOrder
    credentialHash?: SortOrder
    deviceTokenHash?: SortOrder
    lastSeenAt?: SortOrder
    currentlyShowingSlot?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    slotDayPrice?: SortOrder
    currentlyShowingSlot?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    locationLabel?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    defaultImageUrl?: SortOrder
    slotDayPrice?: SortOrder
    status?: SortOrder
    approvalStatus?: SortOrder
    rejectionReason?: SortOrder
    credentialHash?: SortOrder
    deviceTokenHash?: SortOrder
    lastSeenAt?: SortOrder
    currentlyShowingSlot?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    name?: SortOrder
    locationLabel?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    defaultImageUrl?: SortOrder
    slotDayPrice?: SortOrder
    status?: SortOrder
    approvalStatus?: SortOrder
    rejectionReason?: SortOrder
    credentialHash?: SortOrder
    deviceTokenHash?: SortOrder
    lastSeenAt?: SortOrder
    currentlyShowingSlot?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    slotDayPrice?: SortOrder
    currentlyShowingSlot?: SortOrder
  }

  export type EnumDeviceOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceOrientation | EnumDeviceOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceOrientationWithAggregatesFilter<$PrismaModel> | $Enums.DeviceOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceOrientationFilter<$PrismaModel>
    _max?: NestedEnumDeviceOrientationFilter<$PrismaModel>
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type EnumDeviceApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceApprovalStatus | EnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DeviceImageCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type DeviceImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type DeviceImageMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type DeviceImageMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
  }

  export type DeviceImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AdvertiserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdvertiserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdvertiserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type AdvertiserScalarRelationFilter = {
    is?: AdvertiserWhereInput
    isNot?: AdvertiserWhereInput
  }

  export type CreativeNullableScalarRelationFilter = {
    is?: CreativeWhereInput | null
    isNot?: CreativeWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type BookingEventListRelationFilter = {
    every?: BookingEventWhereInput
    some?: BookingEventWhereInput
    none?: BookingEventWhereInput
  }

  export type BookingEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    deviceId?: SortOrder
    slotIndex?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
    status?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    slotIndex?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    deviceId?: SortOrder
    slotIndex?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
    status?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    advertiserId?: SortOrder
    deviceId?: SortOrder
    slotIndex?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
    status?: SortOrder
    holdExpiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    slotIndex?: SortOrder
    priceTotal?: SortOrder
    venueSplitAmount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type CreativeCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type CreativeAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
  }

  export type CreativeMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type CreativeMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    imageUrl?: SortOrder
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
    moderationStatus?: SortOrder
    rejectionReason?: SortOrder
    uploadedAt?: SortOrder
  }

  export type CreativeSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    fileSizeBytes?: SortOrder
  }

  export type EnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type SlotOccupancyDeviceIdSlotIndexPlayDateCompoundUniqueInput = {
    deviceId: string
    slotIndex: number
    playDate: Date | string
  }

  export type SlotOccupancyCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    bookingId?: SortOrder
    slotIndex?: SortOrder
    playDate?: SortOrder
  }

  export type SlotOccupancyAvgOrderByAggregateInput = {
    slotIndex?: SortOrder
  }

  export type SlotOccupancyMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    bookingId?: SortOrder
    slotIndex?: SortOrder
    playDate?: SortOrder
  }

  export type SlotOccupancyMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    bookingId?: SortOrder
    slotIndex?: SortOrder
    playDate?: SortOrder
  }

  export type SlotOccupancySumOrderByAggregateInput = {
    slotIndex?: SortOrder
  }

  export type EnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BookingEventCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actor?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actor?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingEventMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actor?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type VenueCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type AdvertiserCreateNestedOneWithoutUserInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type VenueUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type AdvertiserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VenueUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutOwnerInput | VenueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutOwnerInput | VenueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutOwnerInput | VenueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type AdvertiserUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    upsert?: AdvertiserUpsertWithoutUserInput
    disconnect?: AdvertiserWhereInput | boolean
    delete?: AdvertiserWhereInput | boolean
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutUserInput, AdvertiserUpdateWithoutUserInput>, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type VenueUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutOwnerInput | VenueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutOwnerInput | VenueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutOwnerInput | VenueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type AdvertiserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutUserInput
    upsert?: AdvertiserUpsertWithoutUserInput
    disconnect?: AdvertiserWhereInput | boolean
    delete?: AdvertiserWhereInput | boolean
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutUserInput, AdvertiserUpdateWithoutUserInput>, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutOwnedVenuesInput = {
    create?: XOR<UserCreateWithoutOwnedVenuesInput, UserUncheckedCreateWithoutOwnedVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedVenuesInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutVenueInput = {
    create?: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput> | DeviceCreateWithoutVenueInput[] | DeviceUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutVenueInput | DeviceCreateOrConnectWithoutVenueInput[]
    createMany?: DeviceCreateManyVenueInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput> | DeviceCreateWithoutVenueInput[] | DeviceUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutVenueInput | DeviceCreateOrConnectWithoutVenueInput[]
    createMany?: DeviceCreateManyVenueInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type EnumRevenueModelFieldUpdateOperationsInput = {
    set?: $Enums.RevenueModel
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumVenueStatusFieldUpdateOperationsInput = {
    set?: $Enums.VenueStatus
  }

  export type UserUpdateOneWithoutOwnedVenuesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedVenuesInput, UserUncheckedCreateWithoutOwnedVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedVenuesInput
    upsert?: UserUpsertWithoutOwnedVenuesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedVenuesInput, UserUpdateWithoutOwnedVenuesInput>, UserUncheckedUpdateWithoutOwnedVenuesInput>
  }

  export type DeviceUpdateManyWithoutVenueNestedInput = {
    create?: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput> | DeviceCreateWithoutVenueInput[] | DeviceUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutVenueInput | DeviceCreateOrConnectWithoutVenueInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutVenueInput | DeviceUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: DeviceCreateManyVenueInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutVenueInput | DeviceUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutVenueInput | DeviceUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput> | DeviceCreateWithoutVenueInput[] | DeviceUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutVenueInput | DeviceCreateOrConnectWithoutVenueInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutVenueInput | DeviceUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: DeviceCreateManyVenueInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutVenueInput | DeviceUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutVenueInput | DeviceUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type VenueCreateNestedOneWithoutDevicesInput = {
    create?: XOR<VenueCreateWithoutDevicesInput, VenueUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutDevicesInput
    connect?: VenueWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutDeviceInput = {
    create?: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput> | BookingCreateWithoutDeviceInput[] | BookingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDeviceInput | BookingCreateOrConnectWithoutDeviceInput[]
    createMany?: BookingCreateManyDeviceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SlotOccupancyCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput> | SlotOccupancyCreateWithoutDeviceInput[] | SlotOccupancyUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutDeviceInput | SlotOccupancyCreateOrConnectWithoutDeviceInput[]
    createMany?: SlotOccupancyCreateManyDeviceInputEnvelope
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
  }

  export type DeviceImageCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput> | DeviceImageCreateWithoutDeviceInput[] | DeviceImageUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceImageCreateOrConnectWithoutDeviceInput | DeviceImageCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceImageCreateManyDeviceInputEnvelope
    connect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput> | BookingCreateWithoutDeviceInput[] | BookingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDeviceInput | BookingCreateOrConnectWithoutDeviceInput[]
    createMany?: BookingCreateManyDeviceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SlotOccupancyUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput> | SlotOccupancyCreateWithoutDeviceInput[] | SlotOccupancyUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutDeviceInput | SlotOccupancyCreateOrConnectWithoutDeviceInput[]
    createMany?: SlotOccupancyCreateManyDeviceInputEnvelope
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
  }

  export type DeviceImageUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput> | DeviceImageCreateWithoutDeviceInput[] | DeviceImageUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceImageCreateOrConnectWithoutDeviceInput | DeviceImageCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceImageCreateManyDeviceInputEnvelope
    connect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
  }

  export type EnumDeviceOrientationFieldUpdateOperationsInput = {
    set?: $Enums.DeviceOrientation
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type EnumDeviceApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceApprovalStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenueUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<VenueCreateWithoutDevicesInput, VenueUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutDevicesInput
    upsert?: VenueUpsertWithoutDevicesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutDevicesInput, VenueUpdateWithoutDevicesInput>, VenueUncheckedUpdateWithoutDevicesInput>
  }

  export type BookingUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput> | BookingCreateWithoutDeviceInput[] | BookingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDeviceInput | BookingCreateOrConnectWithoutDeviceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDeviceInput | BookingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: BookingCreateManyDeviceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDeviceInput | BookingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDeviceInput | BookingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SlotOccupancyUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput> | SlotOccupancyCreateWithoutDeviceInput[] | SlotOccupancyUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutDeviceInput | SlotOccupancyCreateOrConnectWithoutDeviceInput[]
    upsert?: SlotOccupancyUpsertWithWhereUniqueWithoutDeviceInput | SlotOccupancyUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SlotOccupancyCreateManyDeviceInputEnvelope
    set?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    disconnect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    delete?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    update?: SlotOccupancyUpdateWithWhereUniqueWithoutDeviceInput | SlotOccupancyUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SlotOccupancyUpdateManyWithWhereWithoutDeviceInput | SlotOccupancyUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
  }

  export type DeviceImageUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput> | DeviceImageCreateWithoutDeviceInput[] | DeviceImageUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceImageCreateOrConnectWithoutDeviceInput | DeviceImageCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceImageUpsertWithWhereUniqueWithoutDeviceInput | DeviceImageUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceImageCreateManyDeviceInputEnvelope
    set?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    disconnect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    delete?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    connect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    update?: DeviceImageUpdateWithWhereUniqueWithoutDeviceInput | DeviceImageUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceImageUpdateManyWithWhereWithoutDeviceInput | DeviceImageUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceImageScalarWhereInput | DeviceImageScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput> | BookingCreateWithoutDeviceInput[] | BookingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutDeviceInput | BookingCreateOrConnectWithoutDeviceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutDeviceInput | BookingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: BookingCreateManyDeviceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutDeviceInput | BookingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutDeviceInput | BookingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SlotOccupancyUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput> | SlotOccupancyCreateWithoutDeviceInput[] | SlotOccupancyUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutDeviceInput | SlotOccupancyCreateOrConnectWithoutDeviceInput[]
    upsert?: SlotOccupancyUpsertWithWhereUniqueWithoutDeviceInput | SlotOccupancyUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: SlotOccupancyCreateManyDeviceInputEnvelope
    set?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    disconnect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    delete?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    update?: SlotOccupancyUpdateWithWhereUniqueWithoutDeviceInput | SlotOccupancyUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: SlotOccupancyUpdateManyWithWhereWithoutDeviceInput | SlotOccupancyUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
  }

  export type DeviceImageUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput> | DeviceImageCreateWithoutDeviceInput[] | DeviceImageUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceImageCreateOrConnectWithoutDeviceInput | DeviceImageCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceImageUpsertWithWhereUniqueWithoutDeviceInput | DeviceImageUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceImageCreateManyDeviceInputEnvelope
    set?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    disconnect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    delete?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    connect?: DeviceImageWhereUniqueInput | DeviceImageWhereUniqueInput[]
    update?: DeviceImageUpdateWithWhereUniqueWithoutDeviceInput | DeviceImageUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceImageUpdateManyWithWhereWithoutDeviceInput | DeviceImageUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceImageScalarWhereInput | DeviceImageScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutImagesInput = {
    create?: XOR<DeviceCreateWithoutImagesInput, DeviceUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutImagesInput
    connect?: DeviceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<DeviceCreateWithoutImagesInput, DeviceUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutImagesInput
    upsert?: DeviceUpsertWithoutImagesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutImagesInput, DeviceUpdateWithoutImagesInput>, DeviceUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutAdvertiserProfileInput = {
    create?: XOR<UserCreateWithoutAdvertiserProfileInput, UserUncheckedCreateWithoutAdvertiserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertiserProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput> | BookingCreateWithoutAdvertiserInput[] | BookingUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAdvertiserInput | BookingCreateOrConnectWithoutAdvertiserInput[]
    createMany?: BookingCreateManyAdvertiserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutAdvertiserInput = {
    create?: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput> | BookingCreateWithoutAdvertiserInput[] | BookingUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAdvertiserInput | BookingCreateOrConnectWithoutAdvertiserInput[]
    createMany?: BookingCreateManyAdvertiserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutAdvertiserProfileNestedInput = {
    create?: XOR<UserCreateWithoutAdvertiserProfileInput, UserUncheckedCreateWithoutAdvertiserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdvertiserProfileInput
    upsert?: UserUpsertWithoutAdvertiserProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdvertiserProfileInput, UserUpdateWithoutAdvertiserProfileInput>, UserUncheckedUpdateWithoutAdvertiserProfileInput>
  }

  export type BookingUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput> | BookingCreateWithoutAdvertiserInput[] | BookingUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAdvertiserInput | BookingCreateOrConnectWithoutAdvertiserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAdvertiserInput | BookingUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: BookingCreateManyAdvertiserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAdvertiserInput | BookingUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAdvertiserInput | BookingUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutAdvertiserNestedInput = {
    create?: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput> | BookingCreateWithoutAdvertiserInput[] | BookingUncheckedCreateWithoutAdvertiserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAdvertiserInput | BookingCreateOrConnectWithoutAdvertiserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAdvertiserInput | BookingUpsertWithWhereUniqueWithoutAdvertiserInput[]
    createMany?: BookingCreateManyAdvertiserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAdvertiserInput | BookingUpdateWithWhereUniqueWithoutAdvertiserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAdvertiserInput | BookingUpdateManyWithWhereWithoutAdvertiserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AdvertiserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<AdvertiserCreateWithoutBookingsInput, AdvertiserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutBookingsInput
    connect?: AdvertiserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<DeviceCreateWithoutBookingsInput, DeviceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutBookingsInput
    connect?: DeviceWhereUniqueInput
  }

  export type CreativeCreateNestedOneWithoutBookingInput = {
    create?: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: CreativeCreateOrConnectWithoutBookingInput
    connect?: CreativeWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type SlotOccupancyCreateNestedManyWithoutBookingInput = {
    create?: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput> | SlotOccupancyCreateWithoutBookingInput[] | SlotOccupancyUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutBookingInput | SlotOccupancyCreateOrConnectWithoutBookingInput[]
    createMany?: SlotOccupancyCreateManyBookingInputEnvelope
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
  }

  export type BookingEventCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
  }

  export type CreativeUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: CreativeCreateOrConnectWithoutBookingInput
    connect?: CreativeWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput> | SlotOccupancyCreateWithoutBookingInput[] | SlotOccupancyUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutBookingInput | SlotOccupancyCreateOrConnectWithoutBookingInput[]
    createMany?: SlotOccupancyCreateManyBookingInputEnvelope
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
  }

  export type BookingEventUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type AdvertiserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<AdvertiserCreateWithoutBookingsInput, AdvertiserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AdvertiserCreateOrConnectWithoutBookingsInput
    upsert?: AdvertiserUpsertWithoutBookingsInput
    connect?: AdvertiserWhereUniqueInput
    update?: XOR<XOR<AdvertiserUpdateToOneWithWhereWithoutBookingsInput, AdvertiserUpdateWithoutBookingsInput>, AdvertiserUncheckedUpdateWithoutBookingsInput>
  }

  export type DeviceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<DeviceCreateWithoutBookingsInput, DeviceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutBookingsInput
    upsert?: DeviceUpsertWithoutBookingsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutBookingsInput, DeviceUpdateWithoutBookingsInput>, DeviceUncheckedUpdateWithoutBookingsInput>
  }

  export type CreativeUpdateOneWithoutBookingNestedInput = {
    create?: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: CreativeCreateOrConnectWithoutBookingInput
    upsert?: CreativeUpsertWithoutBookingInput
    disconnect?: CreativeWhereInput | boolean
    delete?: CreativeWhereInput | boolean
    connect?: CreativeWhereUniqueInput
    update?: XOR<XOR<CreativeUpdateToOneWithWhereWithoutBookingInput, CreativeUpdateWithoutBookingInput>, CreativeUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type SlotOccupancyUpdateManyWithoutBookingNestedInput = {
    create?: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput> | SlotOccupancyCreateWithoutBookingInput[] | SlotOccupancyUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutBookingInput | SlotOccupancyCreateOrConnectWithoutBookingInput[]
    upsert?: SlotOccupancyUpsertWithWhereUniqueWithoutBookingInput | SlotOccupancyUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: SlotOccupancyCreateManyBookingInputEnvelope
    set?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    disconnect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    delete?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    update?: SlotOccupancyUpdateWithWhereUniqueWithoutBookingInput | SlotOccupancyUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: SlotOccupancyUpdateManyWithWhereWithoutBookingInput | SlotOccupancyUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
  }

  export type BookingEventUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    upsert?: BookingEventUpsertWithWhereUniqueWithoutBookingInput | BookingEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    set?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    disconnect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    delete?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    update?: BookingEventUpdateWithWhereUniqueWithoutBookingInput | BookingEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingEventUpdateManyWithWhereWithoutBookingInput | BookingEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
  }

  export type CreativeUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: CreativeCreateOrConnectWithoutBookingInput
    upsert?: CreativeUpsertWithoutBookingInput
    disconnect?: CreativeWhereInput | boolean
    delete?: CreativeWhereInput | boolean
    connect?: CreativeWhereUniqueInput
    update?: XOR<XOR<CreativeUpdateToOneWithWhereWithoutBookingInput, CreativeUpdateWithoutBookingInput>, CreativeUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput> | SlotOccupancyCreateWithoutBookingInput[] | SlotOccupancyUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: SlotOccupancyCreateOrConnectWithoutBookingInput | SlotOccupancyCreateOrConnectWithoutBookingInput[]
    upsert?: SlotOccupancyUpsertWithWhereUniqueWithoutBookingInput | SlotOccupancyUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: SlotOccupancyCreateManyBookingInputEnvelope
    set?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    disconnect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    delete?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    connect?: SlotOccupancyWhereUniqueInput | SlotOccupancyWhereUniqueInput[]
    update?: SlotOccupancyUpdateWithWhereUniqueWithoutBookingInput | SlotOccupancyUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: SlotOccupancyUpdateManyWithWhereWithoutBookingInput | SlotOccupancyUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
  }

  export type BookingEventUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput> | BookingEventCreateWithoutBookingInput[] | BookingEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingEventCreateOrConnectWithoutBookingInput | BookingEventCreateOrConnectWithoutBookingInput[]
    upsert?: BookingEventUpsertWithWhereUniqueWithoutBookingInput | BookingEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingEventCreateManyBookingInputEnvelope
    set?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    disconnect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    delete?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    connect?: BookingEventWhereUniqueInput | BookingEventWhereUniqueInput[]
    update?: BookingEventUpdateWithWhereUniqueWithoutBookingInput | BookingEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingEventUpdateManyWithWhereWithoutBookingInput | BookingEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutCreativeInput = {
    create?: XOR<BookingCreateWithoutCreativeInput, BookingUncheckedCreateWithoutCreativeInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCreativeInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumModerationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModerationStatus
  }

  export type BookingUpdateOneRequiredWithoutCreativeNestedInput = {
    create?: XOR<BookingCreateWithoutCreativeInput, BookingUncheckedCreateWithoutCreativeInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCreativeInput
    upsert?: BookingUpsertWithoutCreativeInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCreativeInput, BookingUpdateWithoutCreativeInput>, BookingUncheckedUpdateWithoutCreativeInput>
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type DeviceCreateNestedOneWithoutSlotOccupanciesInput = {
    create?: XOR<DeviceCreateWithoutSlotOccupanciesInput, DeviceUncheckedCreateWithoutSlotOccupanciesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSlotOccupanciesInput
    connect?: DeviceWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutSlotOccupanciesInput = {
    create?: XOR<BookingCreateWithoutSlotOccupanciesInput, BookingUncheckedCreateWithoutSlotOccupanciesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSlotOccupanciesInput
    connect?: BookingWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutSlotOccupanciesNestedInput = {
    create?: XOR<DeviceCreateWithoutSlotOccupanciesInput, DeviceUncheckedCreateWithoutSlotOccupanciesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSlotOccupanciesInput
    upsert?: DeviceUpsertWithoutSlotOccupanciesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSlotOccupanciesInput, DeviceUpdateWithoutSlotOccupanciesInput>, DeviceUncheckedUpdateWithoutSlotOccupanciesInput>
  }

  export type BookingUpdateOneRequiredWithoutSlotOccupanciesNestedInput = {
    create?: XOR<BookingCreateWithoutSlotOccupanciesInput, BookingUncheckedCreateWithoutSlotOccupanciesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutSlotOccupanciesInput
    upsert?: BookingUpsertWithoutSlotOccupanciesInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutSlotOccupanciesInput, BookingUpdateWithoutSlotOccupanciesInput>, BookingUncheckedUpdateWithoutSlotOccupanciesInput>
  }

  export type BookingCreateNestedOneWithoutEventsInput = {
    create?: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEventsInput
    connect?: BookingWhereUniqueInput
  }

  export type NullableEnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus | null
  }

  export type BookingUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEventsInput
    upsert?: BookingUpsertWithoutEventsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutEventsInput, BookingUpdateWithoutEventsInput>, BookingUncheckedUpdateWithoutEventsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRevenueModelFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenueModel | EnumRevenueModelFieldRefInput<$PrismaModel>
    in?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenueModelFilter<$PrismaModel> | $Enums.RevenueModel
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumVenueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueStatus | EnumVenueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueStatusFilter<$PrismaModel> | $Enums.VenueStatus
  }

  export type NestedEnumRevenueModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevenueModel | EnumRevenueModelFieldRefInput<$PrismaModel>
    in?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevenueModel[] | ListEnumRevenueModelFieldRefInput<$PrismaModel>
    not?: NestedEnumRevenueModelWithAggregatesFilter<$PrismaModel> | $Enums.RevenueModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevenueModelFilter<$PrismaModel>
    _max?: NestedEnumRevenueModelFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumVenueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VenueStatus | EnumVenueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VenueStatus[] | ListEnumVenueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVenueStatusWithAggregatesFilter<$PrismaModel> | $Enums.VenueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVenueStatusFilter<$PrismaModel>
    _max?: NestedEnumVenueStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeviceOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceOrientation | EnumDeviceOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceOrientationFilter<$PrismaModel> | $Enums.DeviceOrientation
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedEnumDeviceApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceApprovalStatus | EnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel> | $Enums.DeviceApprovalStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDeviceOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceOrientation | EnumDeviceOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceOrientation[] | ListEnumDeviceOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceOrientationWithAggregatesFilter<$PrismaModel> | $Enums.DeviceOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceOrientationFilter<$PrismaModel>
    _max?: NestedEnumDeviceOrientationFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeviceApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceApprovalStatus | EnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceApprovalStatus[] | ListEnumDeviceApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceApprovalStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumModerationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusFilter<$PrismaModel> | $Enums.ModerationStatus
  }

  export type NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModerationStatus | EnumModerationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModerationStatus[] | ListEnumModerationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModerationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModerationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModerationStatusFilter<$PrismaModel>
    _max?: NestedEnumModerationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableFilter<$PrismaModel> | $Enums.BookingStatus | null
  }

  export type NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VenueCreateWithoutOwnerInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    createdAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    createdAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput>
  }

  export type VenueCreateManyOwnerInputEnvelope = {
    data: VenueCreateManyOwnerInput | VenueCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AdvertiserCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    phone: string
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    name: string
    phone: string
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutAdvertiserInput
  }

  export type AdvertiserCreateOrConnectWithoutUserInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
  }

  export type VenueUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    update: XOR<VenueUpdateWithoutOwnerInput, VenueUncheckedUpdateWithoutOwnerInput>
    create: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput>
  }

  export type VenueUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    data: XOR<VenueUpdateWithoutOwnerInput, VenueUncheckedUpdateWithoutOwnerInput>
  }

  export type VenueUpdateManyWithWhereWithoutOwnerInput = {
    where: VenueScalarWhereInput
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VenueScalarWhereInput = {
    AND?: VenueScalarWhereInput | VenueScalarWhereInput[]
    OR?: VenueScalarWhereInput[]
    NOT?: VenueScalarWhereInput | VenueScalarWhereInput[]
    id?: UuidFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    contactEmail?: StringFilter<"Venue"> | string
    contactPhone?: StringFilter<"Venue"> | string
    revenueModel?: EnumRevenueModelFilter<"Venue"> | $Enums.RevenueModel
    revenueValue?: DecimalFilter<"Venue"> | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFilter<"Venue"> | string
    status?: EnumVenueStatusFilter<"Venue"> | $Enums.VenueStatus
    ownerId?: UuidNullableFilter<"Venue"> | string | null
    createdAt?: DateTimeFilter<"Venue"> | Date | string
  }

  export type AdvertiserUpsertWithoutUserInput = {
    update: XOR<AdvertiserUpdateWithoutUserInput, AdvertiserUncheckedUpdateWithoutUserInput>
    create: XOR<AdvertiserCreateWithoutUserInput, AdvertiserUncheckedCreateWithoutUserInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutUserInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutUserInput, AdvertiserUncheckedUpdateWithoutUserInput>
  }

  export type AdvertiserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutAdvertiserNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutAdvertiserNestedInput
  }

  export type UserCreateWithoutOwnedVenuesInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    advertiserProfile?: AdvertiserCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedVenuesInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    advertiserProfile?: AdvertiserUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedVenuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedVenuesInput, UserUncheckedCreateWithoutOwnedVenuesInput>
  }

  export type DeviceCreateWithoutVenueInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutDeviceInput
    images?: DeviceImageCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutVenueInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutDeviceInput
    images?: DeviceImageUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutVenueInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput>
  }

  export type DeviceCreateManyVenueInputEnvelope = {
    data: DeviceCreateManyVenueInput | DeviceCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedVenuesInput = {
    update: XOR<UserUpdateWithoutOwnedVenuesInput, UserUncheckedUpdateWithoutOwnedVenuesInput>
    create: XOR<UserCreateWithoutOwnedVenuesInput, UserUncheckedCreateWithoutOwnedVenuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedVenuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedVenuesInput, UserUncheckedUpdateWithoutOwnedVenuesInput>
  }

  export type UserUpdateWithoutOwnedVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiserProfile?: AdvertiserUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedVenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiserProfile?: AdvertiserUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeviceUpsertWithWhereUniqueWithoutVenueInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutVenueInput, DeviceUncheckedUpdateWithoutVenueInput>
    create: XOR<DeviceCreateWithoutVenueInput, DeviceUncheckedCreateWithoutVenueInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutVenueInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutVenueInput, DeviceUncheckedUpdateWithoutVenueInput>
  }

  export type DeviceUpdateManyWithWhereWithoutVenueInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutVenueInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: UuidFilter<"Device"> | string
    venueId?: UuidFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    locationLabel?: StringFilter<"Device"> | string
    resolution?: StringFilter<"Device"> | string
    orientation?: EnumDeviceOrientationFilter<"Device"> | $Enums.DeviceOrientation
    defaultImageUrl?: StringFilter<"Device"> | string
    slotDayPrice?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFilter<"Device"> | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFilter<"Device"> | $Enums.DeviceApprovalStatus
    rejectionReason?: StringNullableFilter<"Device"> | string | null
    credentialHash?: StringFilter<"Device"> | string
    deviceTokenHash?: StringNullableFilter<"Device"> | string | null
    lastSeenAt?: DateTimeNullableFilter<"Device"> | Date | string | null
    currentlyShowingSlot?: IntNullableFilter<"Device"> | number | null
    createdAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type VenueCreateWithoutDevicesInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutOwnedVenuesInput
  }

  export type VenueUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    ownerId?: string | null
    createdAt?: Date | string
  }

  export type VenueCreateOrConnectWithoutDevicesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutDevicesInput, VenueUncheckedCreateWithoutDevicesInput>
  }

  export type BookingCreateWithoutDeviceInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutDeviceInput = {
    id?: string
    advertiserId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutDeviceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput>
  }

  export type BookingCreateManyDeviceInputEnvelope = {
    data: BookingCreateManyDeviceInput | BookingCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type SlotOccupancyCreateWithoutDeviceInput = {
    id?: string
    slotIndex: number
    playDate: Date | string
    booking: BookingCreateNestedOneWithoutSlotOccupanciesInput
  }

  export type SlotOccupancyUncheckedCreateWithoutDeviceInput = {
    id?: string
    bookingId: string
    slotIndex: number
    playDate: Date | string
  }

  export type SlotOccupancyCreateOrConnectWithoutDeviceInput = {
    where: SlotOccupancyWhereUniqueInput
    create: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput>
  }

  export type SlotOccupancyCreateManyDeviceInputEnvelope = {
    data: SlotOccupancyCreateManyDeviceInput | SlotOccupancyCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceImageCreateWithoutDeviceInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type DeviceImageUncheckedCreateWithoutDeviceInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type DeviceImageCreateOrConnectWithoutDeviceInput = {
    where: DeviceImageWhereUniqueInput
    create: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceImageCreateManyDeviceInputEnvelope = {
    data: DeviceImageCreateManyDeviceInput | DeviceImageCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithoutDevicesInput = {
    update: XOR<VenueUpdateWithoutDevicesInput, VenueUncheckedUpdateWithoutDevicesInput>
    create: XOR<VenueCreateWithoutDevicesInput, VenueUncheckedCreateWithoutDevicesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutDevicesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutDevicesInput, VenueUncheckedUpdateWithoutDevicesInput>
  }

  export type VenueUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutOwnedVenuesNestedInput
  }

  export type VenueUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutDeviceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutDeviceInput, BookingUncheckedUpdateWithoutDeviceInput>
    create: XOR<BookingCreateWithoutDeviceInput, BookingUncheckedCreateWithoutDeviceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutDeviceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutDeviceInput, BookingUncheckedUpdateWithoutDeviceInput>
  }

  export type BookingUpdateManyWithWhereWithoutDeviceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutDeviceInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: UuidFilter<"Booking"> | string
    advertiserId?: UuidFilter<"Booking"> | string
    deviceId?: UuidFilter<"Booking"> | string
    slotIndex?: IntFilter<"Booking"> | number
    dateStart?: DateTimeFilter<"Booking"> | Date | string
    dateEnd?: DateTimeFilter<"Booking"> | Date | string
    priceTotal?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    holdExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type SlotOccupancyUpsertWithWhereUniqueWithoutDeviceInput = {
    where: SlotOccupancyWhereUniqueInput
    update: XOR<SlotOccupancyUpdateWithoutDeviceInput, SlotOccupancyUncheckedUpdateWithoutDeviceInput>
    create: XOR<SlotOccupancyCreateWithoutDeviceInput, SlotOccupancyUncheckedCreateWithoutDeviceInput>
  }

  export type SlotOccupancyUpdateWithWhereUniqueWithoutDeviceInput = {
    where: SlotOccupancyWhereUniqueInput
    data: XOR<SlotOccupancyUpdateWithoutDeviceInput, SlotOccupancyUncheckedUpdateWithoutDeviceInput>
  }

  export type SlotOccupancyUpdateManyWithWhereWithoutDeviceInput = {
    where: SlotOccupancyScalarWhereInput
    data: XOR<SlotOccupancyUpdateManyMutationInput, SlotOccupancyUncheckedUpdateManyWithoutDeviceInput>
  }

  export type SlotOccupancyScalarWhereInput = {
    AND?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
    OR?: SlotOccupancyScalarWhereInput[]
    NOT?: SlotOccupancyScalarWhereInput | SlotOccupancyScalarWhereInput[]
    id?: UuidFilter<"SlotOccupancy"> | string
    deviceId?: UuidFilter<"SlotOccupancy"> | string
    bookingId?: UuidFilter<"SlotOccupancy"> | string
    slotIndex?: IntFilter<"SlotOccupancy"> | number
    playDate?: DateTimeFilter<"SlotOccupancy"> | Date | string
  }

  export type DeviceImageUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceImageWhereUniqueInput
    update: XOR<DeviceImageUpdateWithoutDeviceInput, DeviceImageUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceImageCreateWithoutDeviceInput, DeviceImageUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceImageUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceImageWhereUniqueInput
    data: XOR<DeviceImageUpdateWithoutDeviceInput, DeviceImageUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceImageUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceImageScalarWhereInput
    data: XOR<DeviceImageUpdateManyMutationInput, DeviceImageUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceImageScalarWhereInput = {
    AND?: DeviceImageScalarWhereInput | DeviceImageScalarWhereInput[]
    OR?: DeviceImageScalarWhereInput[]
    NOT?: DeviceImageScalarWhereInput | DeviceImageScalarWhereInput[]
    id?: UuidFilter<"DeviceImage"> | string
    deviceId?: UuidFilter<"DeviceImage"> | string
    imageUrl?: StringFilter<"DeviceImage"> | string
    sortOrder?: IntFilter<"DeviceImage"> | number
  }

  export type DeviceCreateWithoutImagesInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutDevicesInput
    bookings?: BookingCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutImagesInput = {
    id?: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDeviceInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutImagesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutImagesInput, DeviceUncheckedCreateWithoutImagesInput>
  }

  export type DeviceUpsertWithoutImagesInput = {
    update: XOR<DeviceUpdateWithoutImagesInput, DeviceUncheckedUpdateWithoutImagesInput>
    create: XOR<DeviceCreateWithoutImagesInput, DeviceUncheckedCreateWithoutImagesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutImagesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutImagesInput, DeviceUncheckedUpdateWithoutImagesInput>
  }

  export type DeviceUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutDevicesNestedInput
    bookings?: BookingUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type UserCreateWithoutAdvertiserProfileInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    ownedVenues?: VenueCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAdvertiserProfileInput = {
    id?: string
    supabaseUserId?: string | null
    email: string
    passwordHash?: string | null
    name: string
    phone: string
    role: $Enums.UserRole
    createdAt?: Date | string
    ownedVenues?: VenueUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAdvertiserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdvertiserProfileInput, UserUncheckedCreateWithoutAdvertiserProfileInput>
  }

  export type BookingCreateWithoutAdvertiserInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    device: DeviceCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAdvertiserInput = {
    id?: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAdvertiserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput>
  }

  export type BookingCreateManyAdvertiserInputEnvelope = {
    data: BookingCreateManyAdvertiserInput | BookingCreateManyAdvertiserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAdvertiserProfileInput = {
    update: XOR<UserUpdateWithoutAdvertiserProfileInput, UserUncheckedUpdateWithoutAdvertiserProfileInput>
    create: XOR<UserCreateWithoutAdvertiserProfileInput, UserUncheckedCreateWithoutAdvertiserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdvertiserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdvertiserProfileInput, UserUncheckedUpdateWithoutAdvertiserProfileInput>
  }

  export type UserUpdateWithoutAdvertiserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedVenues?: VenueUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAdvertiserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedVenues?: VenueUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutAdvertiserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutAdvertiserInput, BookingUncheckedUpdateWithoutAdvertiserInput>
    create: XOR<BookingCreateWithoutAdvertiserInput, BookingUncheckedCreateWithoutAdvertiserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutAdvertiserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutAdvertiserInput, BookingUncheckedUpdateWithoutAdvertiserInput>
  }

  export type BookingUpdateManyWithWhereWithoutAdvertiserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutAdvertiserInput>
  }

  export type AdvertiserCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    phone: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAdvertiserProfileInput
  }

  export type AdvertiserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name: string
    phone: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type AdvertiserCreateOrConnectWithoutBookingsInput = {
    where: AdvertiserWhereUniqueInput
    create: XOR<AdvertiserCreateWithoutBookingsInput, AdvertiserUncheckedCreateWithoutBookingsInput>
  }

  export type DeviceCreateWithoutBookingsInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutDevicesInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutDeviceInput
    images?: DeviceImageCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutBookingsInput = {
    id?: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutDeviceInput
    images?: DeviceImageUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutBookingsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutBookingsInput, DeviceUncheckedCreateWithoutBookingsInput>
  }

  export type CreativeCreateWithoutBookingInput = {
    id?: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type CreativeUncheckedCreateWithoutBookingInput = {
    id?: string
    imageUrl: string
    width: number
    height: number
    fileSizeBytes: number
    moderationStatus?: $Enums.ModerationStatus
    rejectionReason?: string | null
    uploadedAt?: Date | string
  }

  export type CreativeCreateOrConnectWithoutBookingInput = {
    where: CreativeWhereUniqueInput
    create: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type SlotOccupancyCreateWithoutBookingInput = {
    id?: string
    slotIndex: number
    playDate: Date | string
    device: DeviceCreateNestedOneWithoutSlotOccupanciesInput
  }

  export type SlotOccupancyUncheckedCreateWithoutBookingInput = {
    id?: string
    deviceId: string
    slotIndex: number
    playDate: Date | string
  }

  export type SlotOccupancyCreateOrConnectWithoutBookingInput = {
    where: SlotOccupancyWhereUniqueInput
    create: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput>
  }

  export type SlotOccupancyCreateManyBookingInputEnvelope = {
    data: SlotOccupancyCreateManyBookingInput | SlotOccupancyCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingEventCreateWithoutBookingInput = {
    id?: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventUncheckedCreateWithoutBookingInput = {
    id?: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BookingEventCreateOrConnectWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    create: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput>
  }

  export type BookingEventCreateManyBookingInputEnvelope = {
    data: BookingEventCreateManyBookingInput | BookingEventCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type AdvertiserUpsertWithoutBookingsInput = {
    update: XOR<AdvertiserUpdateWithoutBookingsInput, AdvertiserUncheckedUpdateWithoutBookingsInput>
    create: XOR<AdvertiserCreateWithoutBookingsInput, AdvertiserUncheckedCreateWithoutBookingsInput>
    where?: AdvertiserWhereInput
  }

  export type AdvertiserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: AdvertiserWhereInput
    data: XOR<AdvertiserUpdateWithoutBookingsInput, AdvertiserUncheckedUpdateWithoutBookingsInput>
  }

  export type AdvertiserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAdvertiserProfileNestedInput
  }

  export type AdvertiserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpsertWithoutBookingsInput = {
    update: XOR<DeviceUpdateWithoutBookingsInput, DeviceUncheckedUpdateWithoutBookingsInput>
    create: XOR<DeviceCreateWithoutBookingsInput, DeviceUncheckedCreateWithoutBookingsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutBookingsInput, DeviceUncheckedUpdateWithoutBookingsInput>
  }

  export type DeviceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutDevicesNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type CreativeUpsertWithoutBookingInput = {
    update: XOR<CreativeUpdateWithoutBookingInput, CreativeUncheckedUpdateWithoutBookingInput>
    create: XOR<CreativeCreateWithoutBookingInput, CreativeUncheckedCreateWithoutBookingInput>
    where?: CreativeWhereInput
  }

  export type CreativeUpdateToOneWithWhereWithoutBookingInput = {
    where?: CreativeWhereInput
    data: XOR<CreativeUpdateWithoutBookingInput, CreativeUncheckedUpdateWithoutBookingInput>
  }

  export type CreativeUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreativeUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    moderationStatus?: EnumModerationStatusFieldUpdateOperationsInput | $Enums.ModerationStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyUpsertWithWhereUniqueWithoutBookingInput = {
    where: SlotOccupancyWhereUniqueInput
    update: XOR<SlotOccupancyUpdateWithoutBookingInput, SlotOccupancyUncheckedUpdateWithoutBookingInput>
    create: XOR<SlotOccupancyCreateWithoutBookingInput, SlotOccupancyUncheckedCreateWithoutBookingInput>
  }

  export type SlotOccupancyUpdateWithWhereUniqueWithoutBookingInput = {
    where: SlotOccupancyWhereUniqueInput
    data: XOR<SlotOccupancyUpdateWithoutBookingInput, SlotOccupancyUncheckedUpdateWithoutBookingInput>
  }

  export type SlotOccupancyUpdateManyWithWhereWithoutBookingInput = {
    where: SlotOccupancyScalarWhereInput
    data: XOR<SlotOccupancyUpdateManyMutationInput, SlotOccupancyUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingEventUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    update: XOR<BookingEventUpdateWithoutBookingInput, BookingEventUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingEventCreateWithoutBookingInput, BookingEventUncheckedCreateWithoutBookingInput>
  }

  export type BookingEventUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingEventWhereUniqueInput
    data: XOR<BookingEventUpdateWithoutBookingInput, BookingEventUncheckedUpdateWithoutBookingInput>
  }

  export type BookingEventUpdateManyWithWhereWithoutBookingInput = {
    where: BookingEventScalarWhereInput
    data: XOR<BookingEventUpdateManyMutationInput, BookingEventUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingEventScalarWhereInput = {
    AND?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
    OR?: BookingEventScalarWhereInput[]
    NOT?: BookingEventScalarWhereInput | BookingEventScalarWhereInput[]
    id?: UuidFilter<"BookingEvent"> | string
    bookingId?: UuidFilter<"BookingEvent"> | string
    fromStatus?: EnumBookingStatusNullableFilter<"BookingEvent"> | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFilter<"BookingEvent"> | $Enums.BookingStatus
    actor?: StringFilter<"BookingEvent"> | string
    metadata?: JsonNullableFilter<"BookingEvent">
    createdAt?: DateTimeFilter<"BookingEvent"> | Date | string
  }

  export type BookingCreateWithoutCreativeInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    device: DeviceCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCreativeInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCreativeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCreativeInput, BookingUncheckedCreateWithoutCreativeInput>
  }

  export type BookingUpsertWithoutCreativeInput = {
    update: XOR<BookingUpdateWithoutCreativeInput, BookingUncheckedUpdateWithoutCreativeInput>
    create: XOR<BookingCreateWithoutCreativeInput, BookingUncheckedCreateWithoutCreativeInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCreativeInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCreativeInput, BookingUncheckedUpdateWithoutCreativeInput>
  }

  export type BookingUpdateWithoutCreativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCreativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    device: DeviceCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type DeviceCreateWithoutSlotOccupanciesInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    venue: VenueCreateNestedOneWithoutDevicesInput
    bookings?: BookingCreateNestedManyWithoutDeviceInput
    images?: DeviceImageCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSlotOccupanciesInput = {
    id?: string
    venueId: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutDeviceInput
    images?: DeviceImageUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSlotOccupanciesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSlotOccupanciesInput, DeviceUncheckedCreateWithoutSlotOccupanciesInput>
  }

  export type BookingCreateWithoutSlotOccupanciesInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    device: DeviceCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    events?: BookingEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSlotOccupanciesInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    events?: BookingEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSlotOccupanciesInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSlotOccupanciesInput, BookingUncheckedCreateWithoutSlotOccupanciesInput>
  }

  export type DeviceUpsertWithoutSlotOccupanciesInput = {
    update: XOR<DeviceUpdateWithoutSlotOccupanciesInput, DeviceUncheckedUpdateWithoutSlotOccupanciesInput>
    create: XOR<DeviceCreateWithoutSlotOccupanciesInput, DeviceUncheckedCreateWithoutSlotOccupanciesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSlotOccupanciesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSlotOccupanciesInput, DeviceUncheckedUpdateWithoutSlotOccupanciesInput>
  }

  export type DeviceUpdateWithoutSlotOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutDevicesNestedInput
    bookings?: BookingUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSlotOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    venueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type BookingUpsertWithoutSlotOccupanciesInput = {
    update: XOR<BookingUpdateWithoutSlotOccupanciesInput, BookingUncheckedUpdateWithoutSlotOccupanciesInput>
    create: XOR<BookingCreateWithoutSlotOccupanciesInput, BookingUncheckedCreateWithoutSlotOccupanciesInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutSlotOccupanciesInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutSlotOccupanciesInput, BookingUncheckedUpdateWithoutSlotOccupanciesInput>
  }

  export type BookingUpdateWithoutSlotOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSlotOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateWithoutEventsInput = {
    id?: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    advertiser: AdvertiserCreateNestedOneWithoutBookingsInput
    device: DeviceCreateNestedOneWithoutBookingsInput
    creative?: CreativeCreateNestedOneWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutEventsInput = {
    id?: string
    advertiserId: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
    creative?: CreativeUncheckedCreateNestedOneWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    slotOccupancies?: SlotOccupancyUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutEventsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
  }

  export type BookingUpsertWithoutEventsInput = {
    update: XOR<BookingUpdateWithoutEventsInput, BookingUncheckedUpdateWithoutEventsInput>
    create: XOR<BookingCreateWithoutEventsInput, BookingUncheckedCreateWithoutEventsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutEventsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutEventsInput, BookingUncheckedUpdateWithoutEventsInput>
  }

  export type BookingUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type VenueCreateManyOwnerInput = {
    id?: string
    name: string
    contactEmail: string
    contactPhone: string
    revenueModel: $Enums.RevenueModel
    revenueValue: Decimal | DecimalJsLike | number | string
    defaultImageUrl: string
    status?: $Enums.VenueStatus
    createdAt?: Date | string
  }

  export type VenueUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    revenueModel?: EnumRevenueModelFieldUpdateOperationsInput | $Enums.RevenueModel
    revenueValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumVenueStatusFieldUpdateOperationsInput | $Enums.VenueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyVenueInput = {
    id?: string
    name: string
    locationLabel: string
    resolution: string
    orientation?: $Enums.DeviceOrientation
    defaultImageUrl: string
    slotDayPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.DeviceStatus
    approvalStatus?: $Enums.DeviceApprovalStatus
    rejectionReason?: string | null
    credentialHash: string
    deviceTokenHash?: string | null
    lastSeenAt?: Date | string | null
    currentlyShowingSlot?: number | null
    createdAt?: Date | string
  }

  export type DeviceUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutDeviceNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutDeviceNestedInput
    images?: DeviceImageUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    locationLabel?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDeviceOrientationFieldUpdateOperationsInput | $Enums.DeviceOrientation
    defaultImageUrl?: StringFieldUpdateOperationsInput | string
    slotDayPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    approvalStatus?: EnumDeviceApprovalStatusFieldUpdateOperationsInput | $Enums.DeviceApprovalStatus
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    credentialHash?: StringFieldUpdateOperationsInput | string
    deviceTokenHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentlyShowingSlot?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyDeviceInput = {
    id?: string
    advertiserId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SlotOccupancyCreateManyDeviceInput = {
    id?: string
    bookingId: string
    slotIndex: number
    playDate: Date | string
  }

  export type DeviceImageCreateManyDeviceInput = {
    id?: string
    imageUrl: string
    sortOrder?: number
  }

  export type BookingUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    advertiser?: AdvertiserUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    advertiserId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutSlotOccupanciesNestedInput
  }

  export type SlotOccupancyUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceImageUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceImageUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceImageUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyAdvertiserInput = {
    id?: string
    deviceId: string
    slotIndex: number
    dateStart: Date | string
    dateEnd: Date | string
    priceTotal: Decimal | DecimalJsLike | number | string
    venueSplitAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    holdExpiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutBookingsNestedInput
    creative?: CreativeUpdateOneWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUpdateManyWithoutBookingNestedInput
    events?: BookingEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creative?: CreativeUncheckedUpdateOneWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    slotOccupancies?: SlotOccupancyUncheckedUpdateManyWithoutBookingNestedInput
    events?: BookingEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutAdvertiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    priceTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venueSplitAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    holdExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyCreateManyBookingInput = {
    id?: string
    deviceId: string
    slotIndex: number
    playDate: Date | string
  }

  export type BookingEventCreateManyBookingInput = {
    id?: string
    fromStatus?: $Enums.BookingStatus | null
    toStatus: $Enums.BookingStatus
    actor: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SlotOccupancyUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutSlotOccupanciesNestedInput
  }

  export type SlotOccupancyUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotOccupancyUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    slotIndex?: IntFieldUpdateOperationsInput | number
    playDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingEventUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus | null
    toStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    actor?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}