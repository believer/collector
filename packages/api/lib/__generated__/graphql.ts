import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { CollectorContext } from '../types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CollectorItem = {
   __typename?: 'CollectorItem',
  createdAt: Scalars['String'],
  id: Scalars['ID'],
  initialCost: Scalars['Float'],
  manufacturer: Scalars['String'],
  name: Scalars['String'],
  productNumber?: Maybe<Scalars['String']>,
  serialNumber?: Maybe<Scalars['String']>,
  updatedAt: Scalars['String'],
};

export type CollectorItemInput = {
  initialCost?: Maybe<Scalars['Float']>,
  manufacturer: Scalars['String'],
  name: Scalars['String'],
  productNumber?: Maybe<Scalars['String']>,
  serialNumber?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  _empty?: Maybe<Scalars['String']>,
  addItem: Array<CollectorItem>,
  reset: Array<CollectorItem>,
};


export type MutationAddItemArgs = {
  input: Array<CollectorItemInput>
};

export type Query = {
   __typename?: 'Query',
  _empty?: Maybe<Scalars['String']>,
  items: Array<CollectorItem>,
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  CollectorItem: ResolverTypeWrapper<CollectorItem>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Mutation: ResolverTypeWrapper<{}>,
  CollectorItemInput: CollectorItemInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  CollectorItem: CollectorItem,
  ID: Scalars['ID'],
  Float: Scalars['Float'],
  Mutation: {},
  CollectorItemInput: CollectorItemInput,
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
  Int: Scalars['Int'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = CollectorContext, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CollectorItemResolvers<ContextType = CollectorContext, ParentType extends ResolversParentTypes['CollectorItem'] = ResolversParentTypes['CollectorItem']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  initialCost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  manufacturer?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  productNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  serialNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = CollectorContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  addItem?: Resolver<Array<ResolversTypes['CollectorItem']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'input'>>,
  reset?: Resolver<Array<ResolversTypes['CollectorItem']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = CollectorContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  items?: Resolver<Array<ResolversTypes['CollectorItem']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = CollectorContext> = {
  CollectorItem?: CollectorItemResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = CollectorContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = CollectorContext> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = CollectorContext> = DirectiveResolvers<ContextType>;