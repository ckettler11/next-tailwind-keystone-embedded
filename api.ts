import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Addendum = {
  __typename?: 'Addendum';
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insight?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['String']>;
  intelligenceRange?: Maybe<Scalars['String']>;
  range?: Maybe<Range>;
  rank?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddendumCreateInput = {
  content?: Maybe<Scalars['String']>;
  insight?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['String']>;
  intelligenceRange?: Maybe<Scalars['String']>;
  range?: Maybe<RangeRelateToOneForCreateInput>;
  rank?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddendumOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type AddendumUpdateArgs = {
  data: AddendumUpdateInput;
  where: AddendumWhereUniqueInput;
};

export type AddendumUpdateInput = {
  content?: Maybe<Scalars['String']>;
  insight?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['String']>;
  intelligenceRange?: Maybe<Scalars['String']>;
  range?: Maybe<RangeRelateToOneForUpdateInput>;
  rank?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddendumWhereInput = {
  AND?: Maybe<Array<AddendumWhereInput>>;
  NOT?: Maybe<Array<AddendumWhereInput>>;
  OR?: Maybe<Array<AddendumWhereInput>>;
  content?: Maybe<StringNullableFilter>;
  id?: Maybe<IdFilter>;
  insight?: Maybe<StringNullableFilter>;
  intelligence?: Maybe<StringNullableFilter>;
  intelligenceRange?: Maybe<StringNullableFilter>;
  range?: Maybe<RangeWhereInput>;
  rank?: Maybe<StringNullableFilter>;
  subhead?: Maybe<StringNullableFilter>;
  type?: Maybe<StringNullableFilter>;
};

export type AddendumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  intelligence?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  question?: Maybe<Question>;
  value?: Maybe<Scalars['Int']>;
};

export type AnswerCreateInput = {
  intelligence?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<QuestionRelateToOneForCreateInput>;
  value?: Maybe<Scalars['Int']>;
};

export type AnswerOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type AnswerRelateToManyForCreateInput = {
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
  create?: Maybe<Array<AnswerCreateInput>>;
};

export type AnswerRelateToManyForUpdateInput = {
  connect?: Maybe<Array<AnswerWhereUniqueInput>>;
  create?: Maybe<Array<AnswerCreateInput>>;
  disconnect?: Maybe<Array<AnswerWhereUniqueInput>>;
  set?: Maybe<Array<AnswerWhereUniqueInput>>;
};

export type AnswerUpdateArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateInput = {
  intelligence?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  question?: Maybe<QuestionRelateToOneForUpdateInput>;
  value?: Maybe<Scalars['Int']>;
};

export type AnswerWhereInput = {
  AND?: Maybe<Array<AnswerWhereInput>>;
  NOT?: Maybe<Array<AnswerWhereInput>>;
  OR?: Maybe<Array<AnswerWhereInput>>;
  id?: Maybe<IdFilter>;
};

export type AnswerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AuthenticatedItem = User;

export type BetterMeeting = {
  __typename?: 'BetterMeeting';
  id: Scalars['ID'];
  insight?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  subModule?: Maybe<Scalars['String']>;
};

export type BetterMeetingCreateInput = {
  insight?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  subModule?: Maybe<Scalars['String']>;
};

export type BetterMeetingOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type BetterMeetingUpdateArgs = {
  data: BetterMeetingUpdateInput;
  where: BetterMeetingWhereUniqueInput;
};

export type BetterMeetingUpdateInput = {
  insight?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  subModule?: Maybe<Scalars['String']>;
};

export type BetterMeetingWhereInput = {
  AND?: Maybe<Array<BetterMeetingWhereInput>>;
  NOT?: Maybe<Array<BetterMeetingWhereInput>>;
  OR?: Maybe<Array<BetterMeetingWhereInput>>;
  id?: Maybe<IdFilter>;
  insight?: Maybe<StringNullableFilter>;
  subModule?: Maybe<StringNullableFilter>;
};

export type BetterMeetingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BetterMeetingsContent = {
  __typename?: 'BetterMeetingsContent';
  achievingBuyIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  agendaCreator?: Maybe<Array<Maybe<Scalars['String']>>>;
  preMeetingSharing?: Maybe<Array<Maybe<Scalars['String']>>>;
  runningTheMeeting?: Maybe<Array<Maybe<Scalars['String']>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type BooleanNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<BooleanNullableFilter>;
};

export type BraintreeToken = {
  __typename?: 'BraintreeToken';
  clientToken: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CContent = {
  __typename?: 'CContent';
  challenged?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dependent?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type CUser = {
  __typename?: 'CUser';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<ScoredCUser>>>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type Communication = {
  __typename?: 'Communication';
  challenged?: Maybe<Scalars['String']>;
  dependent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  intelligence?: Maybe<Scalars['String']>;
  moduleContents?: Maybe<Array<ModuleContent>>;
  moduleContentsCount?: Maybe<Scalars['Int']>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  whenFirst?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};


export type CommunicationModuleContentsArgs = {
  orderBy?: Array<ModuleContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ModuleContentWhereInput;
};


export type CommunicationModuleContentsCountArgs = {
  where?: ModuleContentWhereInput;
};

export type CommunicationContent = {
  __typename?: 'CommunicationContent';
  addenda?: Maybe<Array<Maybe<Addendum>>>;
  challenged?: Maybe<Array<Maybe<CUser>>>;
  core?: Maybe<Array<Maybe<CContent>>>;
  debug?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<CUser>>>;
};

export type CommunicationCreateInput = {
  challenged?: Maybe<Scalars['String']>;
  dependent?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['String']>;
  moduleContents?: Maybe<ModuleContentRelateToManyForCreateInput>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  whenFirst?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type CommunicationOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type CommunicationRelateToOneForCreateInput = {
  connect?: Maybe<CommunicationWhereUniqueInput>;
  create?: Maybe<CommunicationCreateInput>;
};

export type CommunicationRelateToOneForUpdateInput = {
  connect?: Maybe<CommunicationWhereUniqueInput>;
  create?: Maybe<CommunicationCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type CommunicationUpdateArgs = {
  data: CommunicationUpdateInput;
  where: CommunicationWhereUniqueInput;
};

export type CommunicationUpdateInput = {
  challenged?: Maybe<Scalars['String']>;
  dependent?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['String']>;
  moduleContents?: Maybe<ModuleContentRelateToManyForUpdateInput>;
  subhead?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  whenFirst?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type CommunicationWhereInput = {
  AND?: Maybe<Array<CommunicationWhereInput>>;
  NOT?: Maybe<Array<CommunicationWhereInput>>;
  OR?: Maybe<Array<CommunicationWhereInput>>;
  challenged?: Maybe<StringNullableFilter>;
  dependent?: Maybe<StringNullableFilter>;
  id?: Maybe<IdFilter>;
  intelligence?: Maybe<StringNullableFilter>;
  moduleContents?: Maybe<ModuleContentManyRelationFilter>;
  subhead?: Maybe<StringNullableFilter>;
  type?: Maybe<StringNullableFilter>;
  whenFirst?: Maybe<StringNullableFilter>;
  whenSecond?: Maybe<StringNullableFilter>;
  whenThird?: Maybe<StringNullableFilter>;
};

export type CommunicationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Connection = {
  __typename?: 'Connection';
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<User>;
  deleted?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
};

export type ConnectionCreateInput = {
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<UserRelateToOneForCreateInput>;
  deleted?: Maybe<Scalars['Boolean']>;
  initiator?: Maybe<UserRelateToOneForCreateInput>;
};

export type ConnectionOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ConnectionUpdateArgs = {
  data: ConnectionUpdateInput;
  where: ConnectionWhereUniqueInput;
};

export type ConnectionUpdateInput = {
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<UserRelateToOneForUpdateInput>;
  deleted?: Maybe<Scalars['Boolean']>;
  initiator?: Maybe<UserRelateToOneForUpdateInput>;
};

export type ConnectionWhereInput = {
  AND?: Maybe<Array<ConnectionWhereInput>>;
  NOT?: Maybe<Array<ConnectionWhereInput>>;
  OR?: Maybe<Array<ConnectionWhereInput>>;
  acceptor?: Maybe<UserWhereInput>;
  deleted?: Maybe<BooleanNullableFilter>;
  id?: Maybe<IdFilter>;
  initiator?: Maybe<UserWhereInput>;
};

export type ConnectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Content = {
  __typename?: 'Content';
  contentType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insight?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  moduleContents?: Maybe<Array<ModuleContent>>;
  moduleContentsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  personalNote?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['JSON']>;
  range?: Maybe<Array<Range>>;
  rangeCount?: Maybe<Scalars['Int']>;
  sixtyChar?: Maybe<Scalars['String']>;
  subContents?: Maybe<Array<SubContent>>;
  subContentsCount?: Maybe<Scalars['Int']>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};


export type ContentModuleContentsArgs = {
  orderBy?: Array<ModuleContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ModuleContentWhereInput;
};


export type ContentModuleContentsCountArgs = {
  where?: ModuleContentWhereInput;
};


export type ContentRangeArgs = {
  orderBy?: Array<RangeOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: RangeWhereInput;
};


export type ContentRangeCountArgs = {
  where?: RangeWhereInput;
};


export type ContentSubContentsArgs = {
  orderBy?: Array<SubContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: SubContentWhereInput;
};


export type ContentSubContentsCountArgs = {
  where?: SubContentWhereInput;
};

export type ContentCreateInput = {
  contentType?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  moduleContents?: Maybe<ModuleContentRelateToManyForCreateInput>;
  personalNote?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['JSON']>;
  range?: Maybe<RangeRelateToManyForCreateInput>;
  sixtyChar?: Maybe<Scalars['String']>;
  subContents?: Maybe<SubContentRelateToManyForCreateInput>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type ContentManyRelationFilter = {
  every?: Maybe<ContentWhereInput>;
  none?: Maybe<ContentWhereInput>;
  some?: Maybe<ContentWhereInput>;
};

export type ContentOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ContentRelateToManyForCreateInput = {
  connect?: Maybe<Array<ContentWhereUniqueInput>>;
  create?: Maybe<Array<ContentCreateInput>>;
};

export type ContentRelateToManyForUpdateInput = {
  connect?: Maybe<Array<ContentWhereUniqueInput>>;
  create?: Maybe<Array<ContentCreateInput>>;
  disconnect?: Maybe<Array<ContentWhereUniqueInput>>;
  set?: Maybe<Array<ContentWhereUniqueInput>>;
};

export type ContentRelateToOneForCreateInput = {
  connect?: Maybe<ContentWhereUniqueInput>;
  create?: Maybe<ContentCreateInput>;
};

export type ContentRelateToOneForUpdateInput = {
  connect?: Maybe<ContentWhereUniqueInput>;
  create?: Maybe<ContentCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type ContentUpdateArgs = {
  data: ContentUpdateInput;
  where: ContentWhereUniqueInput;
};

export type ContentUpdateInput = {
  contentType?: Maybe<Scalars['String']>;
  logic?: Maybe<Scalars['JSON']>;
  moduleContents?: Maybe<ModuleContentRelateToManyForUpdateInput>;
  personalNote?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['JSON']>;
  range?: Maybe<RangeRelateToManyForUpdateInput>;
  sixtyChar?: Maybe<Scalars['String']>;
  subContents?: Maybe<SubContentRelateToManyForUpdateInput>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type ContentWhereInput = {
  AND?: Maybe<Array<ContentWhereInput>>;
  NOT?: Maybe<Array<ContentWhereInput>>;
  OR?: Maybe<Array<ContentWhereInput>>;
  contentType?: Maybe<StringNullableFilter>;
  id?: Maybe<IdFilter>;
  moduleContents?: Maybe<ModuleContentManyRelationFilter>;
  range?: Maybe<RangeManyRelationFilter>;
  subContents?: Maybe<SubContentManyRelationFilter>;
};

export type ContentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<DateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type Dynamic = {
  __typename?: 'Dynamic';
  className?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type GeneralResponse = {
  __typename?: 'GeneralResponse';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Group = {
  __typename?: 'Group';
  defaultVus?: Maybe<Array<Vu>>;
  defaultVusCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  members?: Maybe<Array<Membership>>;
  membersCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  plan?: Maybe<Plan>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type GroupDefaultVusArgs = {
  orderBy?: Array<VuOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: VuWhereInput;
};


export type GroupDefaultVusCountArgs = {
  where?: VuWhereInput;
};


export type GroupMembersArgs = {
  orderBy?: Array<MembershipOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: MembershipWhereInput;
};


export type GroupMembersCountArgs = {
  where?: MembershipWhereInput;
};

export type GroupCreateInput = {
  defaultVus?: Maybe<VuRelateToManyForCreateInput>;
  image?: Maybe<Scalars['Upload']>;
  members?: Maybe<MembershipRelateToManyForCreateInput>;
  name?: Maybe<Scalars['String']>;
  plan?: Maybe<PlanRelateToOneForCreateInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GroupOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type GroupRelateToOneForCreateInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateInput>;
};

export type GroupRelateToOneForUpdateInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  defaultVus?: Maybe<VuRelateToManyForUpdateInput>;
  image?: Maybe<Scalars['Upload']>;
  members?: Maybe<MembershipRelateToManyForUpdateInput>;
  name?: Maybe<Scalars['String']>;
  plan?: Maybe<PlanRelateToOneForUpdateInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<GroupWhereInput>>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  id?: Maybe<IdFilter>;
  members?: Maybe<MembershipManyRelationFilter>;
  slug?: Maybe<StringNullableFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type IdFilter = {
  equals?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  not?: Maybe<IdFilter>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type Insight = {
  __typename?: 'Insight';
  descriptive?: Maybe<Scalars['String']>;
  diagnostic?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  predictive?: Maybe<Scalars['String']>;
  prescriptive?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  ranges?: Maybe<Array<Range>>;
  rangesCount?: Maybe<Scalars['Int']>;
  summary?: Maybe<Scalars['String']>;
};


export type InsightRangesArgs = {
  orderBy?: Array<RangeOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: RangeWhereInput;
};


export type InsightRangesCountArgs = {
  where?: RangeWhereInput;
};

export type InsightCreateInput = {
  descriptive?: Maybe<Scalars['String']>;
  diagnostic?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  predictive?: Maybe<Scalars['String']>;
  prescriptive?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  ranges?: Maybe<RangeRelateToManyForCreateInput>;
  summary?: Maybe<Scalars['String']>;
};

export type InsightOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type InsightRelateToManyForCreateInput = {
  connect?: Maybe<Array<InsightWhereUniqueInput>>;
  create?: Maybe<Array<InsightCreateInput>>;
};

export type InsightRelateToManyForUpdateInput = {
  connect?: Maybe<Array<InsightWhereUniqueInput>>;
  create?: Maybe<Array<InsightCreateInput>>;
  disconnect?: Maybe<Array<InsightWhereUniqueInput>>;
  set?: Maybe<Array<InsightWhereUniqueInput>>;
};

export type InsightRelateToOneForCreateInput = {
  connect?: Maybe<InsightWhereUniqueInput>;
  create?: Maybe<InsightCreateInput>;
};

export type InsightRelateToOneForUpdateInput = {
  connect?: Maybe<InsightWhereUniqueInput>;
  create?: Maybe<InsightCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type InsightUpdateArgs = {
  data: InsightUpdateInput;
  where: InsightWhereUniqueInput;
};

export type InsightUpdateInput = {
  descriptive?: Maybe<Scalars['String']>;
  diagnostic?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  predictive?: Maybe<Scalars['String']>;
  prescriptive?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  ranges?: Maybe<RangeRelateToManyForUpdateInput>;
  summary?: Maybe<Scalars['String']>;
};

export type InsightWhereInput = {
  AND?: Maybe<Array<InsightWhereInput>>;
  NOT?: Maybe<Array<InsightWhereInput>>;
  OR?: Maybe<Array<InsightWhereInput>>;
  descriptive?: Maybe<StringNullableFilter>;
  diagnostic?: Maybe<StringNullableFilter>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringNullableFilter>;
  predictive?: Maybe<StringNullableFilter>;
  prescriptive?: Maybe<StringNullableFilter>;
  priority?: Maybe<IntNullableFilter>;
  ranges?: Maybe<RangeManyRelationFilter>;
  summary?: Maybe<StringNullableFilter>;
};

export type InsightWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<IntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Invite = {
  __typename?: 'Invite';
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<User>;
  created?: Maybe<Scalars['String']>;
  declined?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  emailSent?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  id: Scalars['ID'];
  initiator?: Maybe<User>;
  lastDate?: Maybe<Scalars['String']>;
  seen?: Maybe<Scalars['Boolean']>;
};

export type InviteCreateInput = {
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<UserRelateToOneForCreateInput>;
  created?: Maybe<Scalars['String']>;
  declined?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  emailSent?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRelateToOneForCreateInput>;
  initiator?: Maybe<UserRelateToOneForCreateInput>;
  seen?: Maybe<Scalars['Boolean']>;
};

export type InviteManyRelationFilter = {
  every?: Maybe<InviteWhereInput>;
  none?: Maybe<InviteWhereInput>;
  some?: Maybe<InviteWhereInput>;
};

export type InviteOrderByInput = {
  accepted?: Maybe<OrderDirection>;
  created?: Maybe<OrderDirection>;
  declined?: Maybe<OrderDirection>;
  deleted?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  emailSent?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  seen?: Maybe<OrderDirection>;
};

export type InviteRelateToManyForCreateInput = {
  connect?: Maybe<Array<InviteWhereUniqueInput>>;
  create?: Maybe<Array<InviteCreateInput>>;
};

export type InviteRelateToManyForUpdateInput = {
  connect?: Maybe<Array<InviteWhereUniqueInput>>;
  create?: Maybe<Array<InviteCreateInput>>;
  disconnect?: Maybe<Array<InviteWhereUniqueInput>>;
  set?: Maybe<Array<InviteWhereUniqueInput>>;
};

export type InviteResponse = {
  __typename?: 'InviteResponse';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type InviteUpdateArgs = {
  data: InviteUpdateInput;
  where: InviteWhereUniqueInput;
};

export type InviteUpdateInput = {
  accepted?: Maybe<Scalars['String']>;
  acceptor?: Maybe<UserRelateToOneForUpdateInput>;
  created?: Maybe<Scalars['String']>;
  declined?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  emailSent?: Maybe<Scalars['String']>;
  group?: Maybe<GroupRelateToOneForUpdateInput>;
  initiator?: Maybe<UserRelateToOneForUpdateInput>;
  seen?: Maybe<Scalars['Boolean']>;
};

export type InviteWhereInput = {
  AND?: Maybe<Array<InviteWhereInput>>;
  NOT?: Maybe<Array<InviteWhereInput>>;
  OR?: Maybe<Array<InviteWhereInput>>;
  accepted?: Maybe<DateTimeNullableFilter>;
  acceptor?: Maybe<UserWhereInput>;
  created?: Maybe<DateTimeNullableFilter>;
  declined?: Maybe<BooleanNullableFilter>;
  deleted?: Maybe<BooleanNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailSent?: Maybe<DateTimeNullableFilter>;
  group?: Maybe<GroupWhereInput>;
  id?: Maybe<IdFilter>;
  initiator?: Maybe<UserWhereInput>;
  seen?: Maybe<BooleanNullableFilter>;
};

export type InviteWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export enum MagicLinkRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum MagicLinkRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

export type MailgunResponse = {
  __typename?: 'MailgunResponse';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Membership = {
  __typename?: 'Membership';
  deleted?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Group>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type MembershipCreateInput = {
  deleted?: Maybe<Scalars['Boolean']>;
  group?: Maybe<GroupRelateToOneForCreateInput>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type MembershipManyRelationFilter = {
  every?: Maybe<MembershipWhereInput>;
  none?: Maybe<MembershipWhereInput>;
  some?: Maybe<MembershipWhereInput>;
};

export type MembershipOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type MembershipRelateToManyForCreateInput = {
  connect?: Maybe<Array<MembershipWhereUniqueInput>>;
  create?: Maybe<Array<MembershipCreateInput>>;
};

export type MembershipRelateToManyForUpdateInput = {
  connect?: Maybe<Array<MembershipWhereUniqueInput>>;
  create?: Maybe<Array<MembershipCreateInput>>;
  disconnect?: Maybe<Array<MembershipWhereUniqueInput>>;
  set?: Maybe<Array<MembershipWhereUniqueInput>>;
};

export type MembershipUpdateArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};

export type MembershipUpdateInput = {
  deleted?: Maybe<Scalars['Boolean']>;
  group?: Maybe<GroupRelateToOneForUpdateInput>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type MembershipWhereInput = {
  AND?: Maybe<Array<MembershipWhereInput>>;
  NOT?: Maybe<Array<MembershipWhereInput>>;
  OR?: Maybe<Array<MembershipWhereInput>>;
  deleted?: Maybe<BooleanNullableFilter>;
  group?: Maybe<GroupWhereInput>;
  id?: Maybe<IdFilter>;
  role?: Maybe<StringNullableFilter>;
  user?: Maybe<UserWhereInput>;
};

export type MembershipWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Module = {
  __typename?: 'Module';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  insights?: Maybe<Array<Insight>>;
  insightsCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  premium?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type ModuleInsightsArgs = {
  orderBy?: Array<InsightOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: InsightWhereInput;
};


export type ModuleInsightsCountArgs = {
  where?: InsightWhereInput;
};

export type ModuleContent = {
  __typename?: 'ModuleContent';
  communication?: Maybe<Communication>;
  content?: Maybe<Content>;
  id: Scalars['ID'];
  module?: Maybe<Module>;
  sixtyChar?: Maybe<Scalars['String']>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type ModuleContentCreateInput = {
  communication?: Maybe<CommunicationRelateToOneForCreateInput>;
  content?: Maybe<ContentRelateToOneForCreateInput>;
  module?: Maybe<ModuleRelateToOneForCreateInput>;
  sixtyChar?: Maybe<Scalars['String']>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type ModuleContentManyRelationFilter = {
  every?: Maybe<ModuleContentWhereInput>;
  none?: Maybe<ModuleContentWhereInput>;
  some?: Maybe<ModuleContentWhereInput>;
};

export type ModuleContentOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ModuleContentRelateToManyForCreateInput = {
  connect?: Maybe<Array<ModuleContentWhereUniqueInput>>;
  create?: Maybe<Array<ModuleContentCreateInput>>;
};

export type ModuleContentRelateToManyForUpdateInput = {
  connect?: Maybe<Array<ModuleContentWhereUniqueInput>>;
  create?: Maybe<Array<ModuleContentCreateInput>>;
  disconnect?: Maybe<Array<ModuleContentWhereUniqueInput>>;
  set?: Maybe<Array<ModuleContentWhereUniqueInput>>;
};

export type ModuleContentUpdateArgs = {
  data: ModuleContentUpdateInput;
  where: ModuleContentWhereUniqueInput;
};

export type ModuleContentUpdateInput = {
  communication?: Maybe<CommunicationRelateToOneForUpdateInput>;
  content?: Maybe<ContentRelateToOneForUpdateInput>;
  module?: Maybe<ModuleRelateToOneForUpdateInput>;
  sixtyChar?: Maybe<Scalars['String']>;
  twentyFiveWord?: Maybe<Scalars['String']>;
  whenFourth?: Maybe<Scalars['String']>;
  whenSecond?: Maybe<Scalars['String']>;
  whenThird?: Maybe<Scalars['String']>;
};

export type ModuleContentWhereInput = {
  AND?: Maybe<Array<ModuleContentWhereInput>>;
  NOT?: Maybe<Array<ModuleContentWhereInput>>;
  OR?: Maybe<Array<ModuleContentWhereInput>>;
  communication?: Maybe<CommunicationWhereInput>;
  content?: Maybe<ContentWhereInput>;
  id?: Maybe<IdFilter>;
  module?: Maybe<ModuleWhereInput>;
  sixtyChar?: Maybe<StringNullableFilter>;
  twentyFiveWord?: Maybe<StringNullableFilter>;
  whenFourth?: Maybe<StringNullableFilter>;
  whenSecond?: Maybe<StringNullableFilter>;
  whenThird?: Maybe<StringNullableFilter>;
};

export type ModuleContentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ModuleCreateInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  insights?: Maybe<InsightRelateToManyForCreateInput>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  premium?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ModuleOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ModuleRelateToManyForCreateInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  create?: Maybe<Array<ModuleCreateInput>>;
};

export type ModuleRelateToManyForUpdateInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  create?: Maybe<Array<ModuleCreateInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
};

export type ModuleRelateToOneForCreateInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  create?: Maybe<ModuleCreateInput>;
};

export type ModuleRelateToOneForUpdateInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  create?: Maybe<ModuleCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type ModuleUpdateArgs = {
  data: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Upload']>;
  insights?: Maybe<InsightRelateToManyForUpdateInput>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  premium?: Maybe<Scalars['Boolean']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type ModuleWhereInput = {
  AND?: Maybe<Array<ModuleWhereInput>>;
  NOT?: Maybe<Array<ModuleWhereInput>>;
  OR?: Maybe<Array<ModuleWhereInput>>;
  id?: Maybe<IdFilter>;
  key?: Maybe<StringNullableFilter>;
  type?: Maybe<StringNullableFilter>;
};

export type ModuleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite?: Maybe<InviteResponse>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  completeTest?: Maybe<GeneralResponse>;
  createAddenda?: Maybe<Array<Maybe<Addendum>>>;
  createAddendum?: Maybe<Addendum>;
  createAnswer?: Maybe<Answer>;
  createAnswers?: Maybe<Array<Maybe<Answer>>>;
  createBetterMeeting?: Maybe<BetterMeeting>;
  createBetterMeetings?: Maybe<Array<Maybe<BetterMeeting>>>;
  createCommunication?: Maybe<Communication>;
  createCommunications?: Maybe<Array<Maybe<Communication>>>;
  createConnection?: Maybe<Connection>;
  createConnections?: Maybe<Array<Maybe<Connection>>>;
  createContent?: Maybe<Content>;
  createContents?: Maybe<Array<Maybe<Content>>>;
  createGroup?: Maybe<Group>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInsight?: Maybe<Insight>;
  createInsights?: Maybe<Array<Maybe<Insight>>>;
  createInvite?: Maybe<Invite>;
  createInvites?: Maybe<Array<Maybe<Invite>>>;
  createMembership?: Maybe<Membership>;
  createMemberships?: Maybe<Array<Maybe<Membership>>>;
  createModule?: Maybe<Module>;
  createModuleContent?: Maybe<ModuleContent>;
  createModuleContents?: Maybe<Array<Maybe<ModuleContent>>>;
  createModules?: Maybe<Array<Maybe<Module>>>;
  createPlan?: Maybe<Plan>;
  createPlans?: Maybe<Array<Maybe<Plan>>>;
  createPolicies?: Maybe<Array<Maybe<Policy>>>;
  createPolicy?: Maybe<Policy>;
  createPreference?: Maybe<Preference>;
  createPreferences?: Maybe<Array<Maybe<Preference>>>;
  createQuestion?: Maybe<Question>;
  createQuestions?: Maybe<Array<Maybe<Question>>>;
  createRange?: Maybe<Range>;
  createRanges?: Maybe<Array<Maybe<Range>>>;
  createResource?: Maybe<Resource>;
  createResources?: Maybe<Array<Maybe<Resource>>>;
  createScore?: Maybe<Score>;
  createScores?: Maybe<Array<Maybe<Score>>>;
  createSubContent?: Maybe<SubContent>;
  createSubContents?: Maybe<Array<Maybe<SubContent>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createVu?: Maybe<Vu>;
  createVus?: Maybe<Array<Maybe<Vu>>>;
  declineInvite?: Maybe<InviteResponse>;
  deleteAddenda?: Maybe<Array<Maybe<Addendum>>>;
  deleteAddendum?: Maybe<Addendum>;
  deleteAnswer?: Maybe<Answer>;
  deleteAnswers?: Maybe<Array<Maybe<Answer>>>;
  deleteBetterMeeting?: Maybe<BetterMeeting>;
  deleteBetterMeetings?: Maybe<Array<Maybe<BetterMeeting>>>;
  deleteCommunication?: Maybe<Communication>;
  deleteCommunications?: Maybe<Array<Maybe<Communication>>>;
  deleteConnection?: Maybe<Connection>;
  deleteConnections?: Maybe<Array<Maybe<Connection>>>;
  deleteContent?: Maybe<Content>;
  deleteContents?: Maybe<Array<Maybe<Content>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteInsight?: Maybe<Insight>;
  deleteInsights?: Maybe<Array<Maybe<Insight>>>;
  deleteInvite?: Maybe<Invite>;
  deleteInvites?: Maybe<Array<Maybe<Invite>>>;
  deleteMembership?: Maybe<Membership>;
  deleteMemberships?: Maybe<Array<Maybe<Membership>>>;
  deleteModule?: Maybe<Module>;
  deleteModuleContent?: Maybe<ModuleContent>;
  deleteModuleContents?: Maybe<Array<Maybe<ModuleContent>>>;
  deleteModules?: Maybe<Array<Maybe<Module>>>;
  deletePlan?: Maybe<Plan>;
  deletePlans?: Maybe<Array<Maybe<Plan>>>;
  deletePolicies?: Maybe<Array<Maybe<Policy>>>;
  deletePolicy?: Maybe<Policy>;
  deletePreference?: Maybe<Preference>;
  deletePreferences?: Maybe<Array<Maybe<Preference>>>;
  deleteQuestion?: Maybe<Question>;
  deleteQuestions?: Maybe<Array<Maybe<Question>>>;
  deleteRange?: Maybe<Range>;
  deleteRanges?: Maybe<Array<Maybe<Range>>>;
  deleteResource?: Maybe<Resource>;
  deleteResources?: Maybe<Array<Maybe<Resource>>>;
  deleteScore?: Maybe<Score>;
  deleteScores?: Maybe<Array<Maybe<Score>>>;
  deleteSubContent?: Maybe<SubContent>;
  deleteSubContents?: Maybe<Array<Maybe<SubContent>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteVu?: Maybe<Vu>;
  deleteVus?: Maybe<Array<Maybe<Vu>>>;
  endSession: Scalars['Boolean'];
  newGroup: NewGroupResponse;
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendInvites?: Maybe<Array<Maybe<MailgunResponse>>>;
  sendUserMagicAuthLink?: Maybe<SendUserMagicAuthLinkResult>;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  updateAddenda?: Maybe<Array<Maybe<Addendum>>>;
  updateAddendum?: Maybe<Addendum>;
  updateAnswer?: Maybe<Answer>;
  updateAnswers?: Maybe<Array<Maybe<Answer>>>;
  updateBetterMeeting?: Maybe<BetterMeeting>;
  updateBetterMeetings?: Maybe<Array<Maybe<BetterMeeting>>>;
  updateCommunication?: Maybe<Communication>;
  updateCommunications?: Maybe<Array<Maybe<Communication>>>;
  updateConnection?: Maybe<Connection>;
  updateConnections?: Maybe<Array<Maybe<Connection>>>;
  updateContent?: Maybe<Content>;
  updateContents?: Maybe<Array<Maybe<Content>>>;
  updateGroup?: Maybe<Group>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateInsight?: Maybe<Insight>;
  updateInsights?: Maybe<Array<Maybe<Insight>>>;
  updateInvite?: Maybe<Invite>;
  updateInvites?: Maybe<Array<Maybe<Invite>>>;
  updateMembership?: Maybe<Membership>;
  updateMemberships?: Maybe<Array<Maybe<Membership>>>;
  updateModule?: Maybe<Module>;
  updateModuleContent?: Maybe<ModuleContent>;
  updateModuleContents?: Maybe<Array<Maybe<ModuleContent>>>;
  updateModules?: Maybe<Array<Maybe<Module>>>;
  updatePlan?: Maybe<Plan>;
  updatePlans?: Maybe<Array<Maybe<Plan>>>;
  updatePolicies?: Maybe<Array<Maybe<Policy>>>;
  updatePolicy?: Maybe<Policy>;
  updatePreference?: Maybe<Preference>;
  updatePreferences?: Maybe<Array<Maybe<Preference>>>;
  updateQuestion?: Maybe<Question>;
  updateQuestions?: Maybe<Array<Maybe<Question>>>;
  updateRange?: Maybe<Range>;
  updateRanges?: Maybe<Array<Maybe<Range>>>;
  updateResource?: Maybe<Resource>;
  updateResources?: Maybe<Array<Maybe<Resource>>>;
  updateScore?: Maybe<Score>;
  updateScores?: Maybe<Array<Maybe<Score>>>;
  updateSubContent?: Maybe<SubContent>;
  updateSubContents?: Maybe<Array<Maybe<SubContent>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateVu?: Maybe<Vu>;
  updateVus?: Maybe<Array<Maybe<Vu>>>;
  userIntake?: Maybe<UserAuthenticationWithPasswordResult>;
};


export type MutationAcceptInviteArgs = {
  inviteId: Scalars['ID'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCompleteTestArgs = {
  progress: Scalars['String'];
};


export type MutationCreateAddendaArgs = {
  data: Array<AddendumCreateInput>;
};


export type MutationCreateAddendumArgs = {
  data: AddendumCreateInput;
};


export type MutationCreateAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateAnswersArgs = {
  data: Array<AnswerCreateInput>;
};


export type MutationCreateBetterMeetingArgs = {
  data: BetterMeetingCreateInput;
};


export type MutationCreateBetterMeetingsArgs = {
  data: Array<BetterMeetingCreateInput>;
};


export type MutationCreateCommunicationArgs = {
  data: CommunicationCreateInput;
};


export type MutationCreateCommunicationsArgs = {
  data: Array<CommunicationCreateInput>;
};


export type MutationCreateConnectionArgs = {
  data: ConnectionCreateInput;
};


export type MutationCreateConnectionsArgs = {
  data: Array<ConnectionCreateInput>;
};


export type MutationCreateContentArgs = {
  data: ContentCreateInput;
};


export type MutationCreateContentsArgs = {
  data: Array<ContentCreateInput>;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateGroupsArgs = {
  data: Array<GroupCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInsightArgs = {
  data: InsightCreateInput;
};


export type MutationCreateInsightsArgs = {
  data: Array<InsightCreateInput>;
};


export type MutationCreateInviteArgs = {
  data: InviteCreateInput;
};


export type MutationCreateInvitesArgs = {
  data: Array<InviteCreateInput>;
};


export type MutationCreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationCreateMembershipsArgs = {
  data: Array<MembershipCreateInput>;
};


export type MutationCreateModuleArgs = {
  data: ModuleCreateInput;
};


export type MutationCreateModuleContentArgs = {
  data: ModuleContentCreateInput;
};


export type MutationCreateModuleContentsArgs = {
  data: Array<ModuleContentCreateInput>;
};


export type MutationCreateModulesArgs = {
  data: Array<ModuleCreateInput>;
};


export type MutationCreatePlanArgs = {
  data: PlanCreateInput;
};


export type MutationCreatePlansArgs = {
  data: Array<PlanCreateInput>;
};


export type MutationCreatePoliciesArgs = {
  data: Array<PolicyCreateInput>;
};


export type MutationCreatePolicyArgs = {
  data: PolicyCreateInput;
};


export type MutationCreatePreferenceArgs = {
  data: PreferenceCreateInput;
};


export type MutationCreatePreferencesArgs = {
  data: Array<PreferenceCreateInput>;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateQuestionsArgs = {
  data: Array<QuestionCreateInput>;
};


export type MutationCreateRangeArgs = {
  data: RangeCreateInput;
};


export type MutationCreateRangesArgs = {
  data: Array<RangeCreateInput>;
};


export type MutationCreateResourceArgs = {
  data: ResourceCreateInput;
};


export type MutationCreateResourcesArgs = {
  data: Array<ResourceCreateInput>;
};


export type MutationCreateScoreArgs = {
  data: ScoreCreateInput;
};


export type MutationCreateScoresArgs = {
  data: Array<ScoreCreateInput>;
};


export type MutationCreateSubContentArgs = {
  data: SubContentCreateInput;
};


export type MutationCreateSubContentsArgs = {
  data: Array<SubContentCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateVuArgs = {
  data: VuCreateInput;
};


export type MutationCreateVusArgs = {
  data: Array<VuCreateInput>;
};


export type MutationDeclineInviteArgs = {
  inviteId: Scalars['ID'];
};


export type MutationDeleteAddendaArgs = {
  where: Array<AddendumWhereUniqueInput>;
};


export type MutationDeleteAddendumArgs = {
  where: AddendumWhereUniqueInput;
};


export type MutationDeleteAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationDeleteAnswersArgs = {
  where: Array<AnswerWhereUniqueInput>;
};


export type MutationDeleteBetterMeetingArgs = {
  where: BetterMeetingWhereUniqueInput;
};


export type MutationDeleteBetterMeetingsArgs = {
  where: Array<BetterMeetingWhereUniqueInput>;
};


export type MutationDeleteCommunicationArgs = {
  where: CommunicationWhereUniqueInput;
};


export type MutationDeleteCommunicationsArgs = {
  where: Array<CommunicationWhereUniqueInput>;
};


export type MutationDeleteConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type MutationDeleteConnectionsArgs = {
  where: Array<ConnectionWhereUniqueInput>;
};


export type MutationDeleteContentArgs = {
  where: ContentWhereUniqueInput;
};


export type MutationDeleteContentsArgs = {
  where: Array<ContentWhereUniqueInput>;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteGroupsArgs = {
  where: Array<GroupWhereUniqueInput>;
};


export type MutationDeleteInsightArgs = {
  where: InsightWhereUniqueInput;
};


export type MutationDeleteInsightsArgs = {
  where: Array<InsightWhereUniqueInput>;
};


export type MutationDeleteInviteArgs = {
  where: InviteWhereUniqueInput;
};


export type MutationDeleteInvitesArgs = {
  where: Array<InviteWhereUniqueInput>;
};


export type MutationDeleteMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type MutationDeleteMembershipsArgs = {
  where: Array<MembershipWhereUniqueInput>;
};


export type MutationDeleteModuleArgs = {
  where: ModuleWhereUniqueInput;
};


export type MutationDeleteModuleContentArgs = {
  where: ModuleContentWhereUniqueInput;
};


export type MutationDeleteModuleContentsArgs = {
  where: Array<ModuleContentWhereUniqueInput>;
};


export type MutationDeleteModulesArgs = {
  where: Array<ModuleWhereUniqueInput>;
};


export type MutationDeletePlanArgs = {
  where: PlanWhereUniqueInput;
};


export type MutationDeletePlansArgs = {
  where: Array<PlanWhereUniqueInput>;
};


export type MutationDeletePoliciesArgs = {
  where: Array<PolicyWhereUniqueInput>;
};


export type MutationDeletePolicyArgs = {
  where: PolicyWhereUniqueInput;
};


export type MutationDeletePreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type MutationDeletePreferencesArgs = {
  where: Array<PreferenceWhereUniqueInput>;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteQuestionsArgs = {
  where: Array<QuestionWhereUniqueInput>;
};


export type MutationDeleteRangeArgs = {
  where: RangeWhereUniqueInput;
};


export type MutationDeleteRangesArgs = {
  where: Array<RangeWhereUniqueInput>;
};


export type MutationDeleteResourceArgs = {
  where: ResourceWhereUniqueInput;
};


export type MutationDeleteResourcesArgs = {
  where: Array<ResourceWhereUniqueInput>;
};


export type MutationDeleteScoreArgs = {
  where: ScoreWhereUniqueInput;
};


export type MutationDeleteScoresArgs = {
  where: Array<ScoreWhereUniqueInput>;
};


export type MutationDeleteSubContentArgs = {
  where: SubContentWhereUniqueInput;
};


export type MutationDeleteSubContentsArgs = {
  where: Array<SubContentWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteVuArgs = {
  where: VuWhereUniqueInput;
};


export type MutationDeleteVusArgs = {
  where: Array<VuWhereUniqueInput>;
};


export type MutationNewGroupArgs = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  group: GroupCreateInput;
};


export type MutationRedeemUserMagicAuthTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendInvitesArgs = {
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  groupId?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type MutationSendUserMagicAuthLinkArgs = {
  email: Scalars['String'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAddendaArgs = {
  data: Array<AddendumUpdateArgs>;
};


export type MutationUpdateAddendumArgs = {
  data: AddendumUpdateInput;
  where: AddendumWhereUniqueInput;
};


export type MutationUpdateAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateAnswersArgs = {
  data: Array<AnswerUpdateArgs>;
};


export type MutationUpdateBetterMeetingArgs = {
  data: BetterMeetingUpdateInput;
  where: BetterMeetingWhereUniqueInput;
};


export type MutationUpdateBetterMeetingsArgs = {
  data: Array<BetterMeetingUpdateArgs>;
};


export type MutationUpdateCommunicationArgs = {
  data: CommunicationUpdateInput;
  where: CommunicationWhereUniqueInput;
};


export type MutationUpdateCommunicationsArgs = {
  data: Array<CommunicationUpdateArgs>;
};


export type MutationUpdateConnectionArgs = {
  data: ConnectionUpdateInput;
  where: ConnectionWhereUniqueInput;
};


export type MutationUpdateConnectionsArgs = {
  data: Array<ConnectionUpdateArgs>;
};


export type MutationUpdateContentArgs = {
  data: ContentUpdateInput;
  where: ContentWhereUniqueInput;
};


export type MutationUpdateContentsArgs = {
  data: Array<ContentUpdateArgs>;
};


export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateGroupsArgs = {
  data: Array<GroupUpdateArgs>;
};


export type MutationUpdateInsightArgs = {
  data: InsightUpdateInput;
  where: InsightWhereUniqueInput;
};


export type MutationUpdateInsightsArgs = {
  data: Array<InsightUpdateArgs>;
};


export type MutationUpdateInviteArgs = {
  data: InviteUpdateInput;
  where: InviteWhereUniqueInput;
};


export type MutationUpdateInvitesArgs = {
  data: Array<InviteUpdateArgs>;
};


export type MutationUpdateMembershipArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};


export type MutationUpdateMembershipsArgs = {
  data: Array<MembershipUpdateArgs>;
};


export type MutationUpdateModuleArgs = {
  data: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
};


export type MutationUpdateModuleContentArgs = {
  data: ModuleContentUpdateInput;
  where: ModuleContentWhereUniqueInput;
};


export type MutationUpdateModuleContentsArgs = {
  data: Array<ModuleContentUpdateArgs>;
};


export type MutationUpdateModulesArgs = {
  data: Array<ModuleUpdateArgs>;
};


export type MutationUpdatePlanArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpdatePlansArgs = {
  data: Array<PlanUpdateArgs>;
};


export type MutationUpdatePoliciesArgs = {
  data: Array<PolicyUpdateArgs>;
};


export type MutationUpdatePolicyArgs = {
  data: PolicyUpdateInput;
  where: PolicyWhereUniqueInput;
};


export type MutationUpdatePreferenceArgs = {
  data: PreferenceUpdateInput;
  where: PreferenceWhereUniqueInput;
};


export type MutationUpdatePreferencesArgs = {
  data: Array<PreferenceUpdateArgs>;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateQuestionsArgs = {
  data: Array<QuestionUpdateArgs>;
};


export type MutationUpdateRangeArgs = {
  data: RangeUpdateInput;
  where: RangeWhereUniqueInput;
};


export type MutationUpdateRangesArgs = {
  data: Array<RangeUpdateArgs>;
};


export type MutationUpdateResourceArgs = {
  data: ResourceUpdateInput;
  where: ResourceWhereUniqueInput;
};


export type MutationUpdateResourcesArgs = {
  data: Array<ResourceUpdateArgs>;
};


export type MutationUpdateScoreArgs = {
  data: ScoreUpdateInput;
  where: ScoreWhereUniqueInput;
};


export type MutationUpdateScoresArgs = {
  data: Array<ScoreUpdateArgs>;
};


export type MutationUpdateSubContentArgs = {
  data: SubContentUpdateInput;
  where: SubContentWhereUniqueInput;
};


export type MutationUpdateSubContentsArgs = {
  data: Array<SubContentUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateVuArgs = {
  data: VuUpdateInput;
  where: VuWhereUniqueInput;
};


export type MutationUpdateVusArgs = {
  data: Array<VuUpdateArgs>;
};


export type MutationUserIntakeArgs = {
  inviteId: Scalars['ID'];
  referrer: Scalars['ID'];
  user: UserCreateInput;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NewGroupResponse = {
  __typename?: 'NewGroupResponse';
  id: Scalars['ID'];
  slug: Scalars['String'];
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
  SecretNotSet = 'SECRET_NOT_SET'
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['ID'];
  maxSeats?: Maybe<Scalars['Int']>;
  modules?: Maybe<Array<Module>>;
  modulesCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};


export type PlanModulesArgs = {
  orderBy?: Array<ModuleOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ModuleWhereInput;
};


export type PlanModulesCountArgs = {
  where?: ModuleWhereInput;
};

export type PlanCreateInput = {
  maxSeats?: Maybe<Scalars['Int']>;
  modules?: Maybe<ModuleRelateToManyForCreateInput>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};

export type PlanOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type PlanRelateToOneForCreateInput = {
  connect?: Maybe<PlanWhereUniqueInput>;
  create?: Maybe<PlanCreateInput>;
};

export type PlanRelateToOneForUpdateInput = {
  connect?: Maybe<PlanWhereUniqueInput>;
  create?: Maybe<PlanCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type PlanUpdateArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};

export type PlanUpdateInput = {
  maxSeats?: Maybe<Scalars['Int']>;
  modules?: Maybe<ModuleRelateToManyForUpdateInput>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};

export type PlanWhereInput = {
  AND?: Maybe<Array<PlanWhereInput>>;
  NOT?: Maybe<Array<PlanWhereInput>>;
  OR?: Maybe<Array<PlanWhereInput>>;
  id?: Maybe<IdFilter>;
};

export type PlanWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Policy = {
  __typename?: 'Policy';
  id: Scalars['ID'];
  policy?: Maybe<Policy_Policy_DocumentField>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PolicyCreateInput = {
  policy?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PolicyOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type PolicyUpdateArgs = {
  data: PolicyUpdateInput;
  where: PolicyWhereUniqueInput;
};

export type PolicyUpdateInput = {
  policy?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PolicyWhereInput = {
  AND?: Maybe<Array<PolicyWhereInput>>;
  NOT?: Maybe<Array<PolicyWhereInput>>;
  OR?: Maybe<Array<PolicyWhereInput>>;
  id?: Maybe<IdFilter>;
};

export type PolicyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Policy_Policy_DocumentField = {
  __typename?: 'Policy_policy_DocumentField';
  document: Scalars['JSON'];
};


export type Policy_Policy_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Preference = {
  __typename?: 'Preference';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type PreferenceCreateInput = {
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type PreferenceOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type PreferenceRelateToOneForCreateInput = {
  connect?: Maybe<PreferenceWhereUniqueInput>;
  create?: Maybe<PreferenceCreateInput>;
};

export type PreferenceRelateToOneForUpdateInput = {
  connect?: Maybe<PreferenceWhereUniqueInput>;
  create?: Maybe<PreferenceCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type PreferenceUpdateArgs = {
  data: PreferenceUpdateInput;
  where: PreferenceWhereUniqueInput;
};

export type PreferenceUpdateInput = {
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type PreferenceWhereInput = {
  AND?: Maybe<Array<PreferenceWhereInput>>;
  NOT?: Maybe<Array<PreferenceWhereInput>>;
  OR?: Maybe<Array<PreferenceWhereInput>>;
  id?: Maybe<IdFilter>;
};

export type PreferenceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  addenda?: Maybe<Array<Addendum>>;
  addendaCount?: Maybe<Scalars['Int']>;
  addendum?: Maybe<Addendum>;
  answer?: Maybe<Answer>;
  answers?: Maybe<Array<Answer>>;
  answersCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  betterMeeting?: Maybe<BetterMeeting>;
  betterMeetings?: Maybe<Array<BetterMeeting>>;
  betterMeetingsCount?: Maybe<Scalars['Int']>;
  communication?: Maybe<Communication>;
  communicationContent?: Maybe<CommunicationContent>;
  communications?: Maybe<Array<Communication>>;
  communicationsCount?: Maybe<Scalars['Int']>;
  connection?: Maybe<Connection>;
  connections?: Maybe<Array<Connection>>;
  connectionsCount?: Maybe<Scalars['Int']>;
  content?: Maybe<Content>;
  contents?: Maybe<Array<Content>>;
  contentsCount?: Maybe<Scalars['Int']>;
  getBetterMeetings?: Maybe<BetterMeetingsContent>;
  getBraintreeToken?: Maybe<BraintreeToken>;
  getVu?: Maybe<Vu>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Group>>;
  groupsCount?: Maybe<Scalars['Int']>;
  insight?: Maybe<Insight>;
  insights?: Maybe<Array<Insight>>;
  insightsCount?: Maybe<Scalars['Int']>;
  invite?: Maybe<Invite>;
  invites?: Maybe<Array<Invite>>;
  invitesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  membership?: Maybe<Membership>;
  memberships?: Maybe<Array<Membership>>;
  membershipsCount?: Maybe<Scalars['Int']>;
  module?: Maybe<Module>;
  moduleContent?: Maybe<ModuleContent>;
  moduleContents?: Maybe<Array<ModuleContent>>;
  moduleContentsCount?: Maybe<Scalars['Int']>;
  modules?: Maybe<Array<Module>>;
  modulesCount?: Maybe<Scalars['Int']>;
  plan?: Maybe<Plan>;
  plans?: Maybe<Array<Plan>>;
  plansCount?: Maybe<Scalars['Int']>;
  policies?: Maybe<Array<Policy>>;
  policiesCount?: Maybe<Scalars['Int']>;
  policy?: Maybe<Policy>;
  preference?: Maybe<Preference>;
  preferences?: Maybe<Array<Preference>>;
  preferencesCount?: Maybe<Scalars['Int']>;
  question?: Maybe<Question>;
  questions?: Maybe<Array<Question>>;
  questionsCount?: Maybe<Scalars['Int']>;
  range?: Maybe<Range>;
  ranges?: Maybe<Array<Range>>;
  rangesCount?: Maybe<Scalars['Int']>;
  resource?: Maybe<Resource>;
  resources?: Maybe<Array<Resource>>;
  resourcesCount?: Maybe<Scalars['Int']>;
  score?: Maybe<Score>;
  scores?: Maybe<Array<Score>>;
  scoresCount?: Maybe<Scalars['Int']>;
  subContent?: Maybe<SubContent>;
  subContents?: Maybe<Array<SubContent>>;
  subContentsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  vu?: Maybe<Vu>;
  vus?: Maybe<Array<Vu>>;
  vusCount?: Maybe<Scalars['Int']>;
};


export type QueryAddendaArgs = {
  orderBy?: Array<AddendumOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: AddendumWhereInput;
};


export type QueryAddendaCountArgs = {
  where?: AddendumWhereInput;
};


export type QueryAddendumArgs = {
  where: AddendumWhereUniqueInput;
};


export type QueryAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryAnswersArgs = {
  orderBy?: Array<AnswerOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: AnswerWhereInput;
};


export type QueryAnswersCountArgs = {
  where?: AnswerWhereInput;
};


export type QueryBetterMeetingArgs = {
  where: BetterMeetingWhereUniqueInput;
};


export type QueryBetterMeetingsArgs = {
  orderBy?: Array<BetterMeetingOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: BetterMeetingWhereInput;
};


export type QueryBetterMeetingsCountArgs = {
  where?: BetterMeetingWhereInput;
};


export type QueryCommunicationArgs = {
  where: CommunicationWhereUniqueInput;
};


export type QueryCommunicationContentArgs = {
  ids: Array<Maybe<Scalars['ID']>>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryCommunicationsArgs = {
  orderBy?: Array<CommunicationOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: CommunicationWhereInput;
};


export type QueryCommunicationsCountArgs = {
  where?: CommunicationWhereInput;
};


export type QueryConnectionArgs = {
  where: ConnectionWhereUniqueInput;
};


export type QueryConnectionsArgs = {
  orderBy?: Array<ConnectionOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ConnectionWhereInput;
};


export type QueryConnectionsCountArgs = {
  where?: ConnectionWhereInput;
};


export type QueryContentArgs = {
  where: ContentWhereUniqueInput;
};


export type QueryContentsArgs = {
  orderBy?: Array<ContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ContentWhereInput;
};


export type QueryContentsCountArgs = {
  where?: ContentWhereInput;
};


export type QueryGetBetterMeetingsArgs = {
  emails: Array<Scalars['String']>;
  group: Scalars['String'];
};


export type QueryGetVuArgs = {
  group?: Maybe<Scalars['String']>;
  ids: Array<Maybe<Scalars['ID']>>;
  insight?: Maybe<Scalars['String']>;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryGroupsArgs = {
  orderBy?: Array<GroupOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: GroupWhereInput;
};


export type QueryGroupsCountArgs = {
  where?: GroupWhereInput;
};


export type QueryInsightArgs = {
  where: InsightWhereUniqueInput;
};


export type QueryInsightsArgs = {
  orderBy?: Array<InsightOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: InsightWhereInput;
};


export type QueryInsightsCountArgs = {
  where?: InsightWhereInput;
};


export type QueryInviteArgs = {
  where: InviteWhereUniqueInput;
};


export type QueryInvitesArgs = {
  orderBy?: Array<InviteOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: InviteWhereInput;
};


export type QueryInvitesCountArgs = {
  where?: InviteWhereInput;
};


export type QueryMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type QueryMembershipsArgs = {
  orderBy?: Array<MembershipOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: MembershipWhereInput;
};


export type QueryMembershipsCountArgs = {
  where?: MembershipWhereInput;
};


export type QueryModuleArgs = {
  where: ModuleWhereUniqueInput;
};


export type QueryModuleContentArgs = {
  where: ModuleContentWhereUniqueInput;
};


export type QueryModuleContentsArgs = {
  orderBy?: Array<ModuleContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ModuleContentWhereInput;
};


export type QueryModuleContentsCountArgs = {
  where?: ModuleContentWhereInput;
};


export type QueryModulesArgs = {
  orderBy?: Array<ModuleOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ModuleWhereInput;
};


export type QueryModulesCountArgs = {
  where?: ModuleWhereInput;
};


export type QueryPlanArgs = {
  where: PlanWhereUniqueInput;
};


export type QueryPlansArgs = {
  orderBy?: Array<PlanOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PlanWhereInput;
};


export type QueryPlansCountArgs = {
  where?: PlanWhereInput;
};


export type QueryPoliciesArgs = {
  orderBy?: Array<PolicyOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PolicyWhereInput;
};


export type QueryPoliciesCountArgs = {
  where?: PolicyWhereInput;
};


export type QueryPolicyArgs = {
  where: PolicyWhereUniqueInput;
};


export type QueryPreferenceArgs = {
  where: PreferenceWhereUniqueInput;
};


export type QueryPreferencesArgs = {
  orderBy?: Array<PreferenceOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: PreferenceWhereInput;
};


export type QueryPreferencesCountArgs = {
  where?: PreferenceWhereInput;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionsArgs = {
  orderBy?: Array<QuestionOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: QuestionWhereInput;
};


export type QueryQuestionsCountArgs = {
  where?: QuestionWhereInput;
};


export type QueryRangeArgs = {
  where: RangeWhereUniqueInput;
};


export type QueryRangesArgs = {
  orderBy?: Array<RangeOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: RangeWhereInput;
};


export type QueryRangesCountArgs = {
  where?: RangeWhereInput;
};


export type QueryResourceArgs = {
  where: ResourceWhereUniqueInput;
};


export type QueryResourcesArgs = {
  orderBy?: Array<ResourceOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ResourceWhereInput;
};


export type QueryResourcesCountArgs = {
  where?: ResourceWhereInput;
};


export type QueryScoreArgs = {
  where: ScoreWhereUniqueInput;
};


export type QueryScoresArgs = {
  orderBy?: Array<ScoreOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ScoreWhereInput;
};


export type QueryScoresCountArgs = {
  where?: ScoreWhereInput;
};


export type QuerySubContentArgs = {
  where: SubContentWhereUniqueInput;
};


export type QuerySubContentsArgs = {
  orderBy?: Array<SubContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: SubContentWhereInput;
};


export type QuerySubContentsCountArgs = {
  where?: SubContentWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type QueryVuArgs = {
  where: VuWhereUniqueInput;
};


export type QueryVusArgs = {
  orderBy?: Array<VuOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: VuWhereInput;
};


export type QueryVusCountArgs = {
  where?: VuWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Answer>>;
  answersCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};


export type QuestionAnswersArgs = {
  orderBy?: Array<AnswerOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: AnswerWhereInput;
};


export type QuestionAnswersCountArgs = {
  where?: AnswerWhereInput;
};

export type QuestionCreateInput = {
  answers?: Maybe<AnswerRelateToManyForCreateInput>;
  number?: Maybe<Scalars['Int']>;
};

export type QuestionOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type QuestionRelateToOneForCreateInput = {
  connect?: Maybe<QuestionWhereUniqueInput>;
  create?: Maybe<QuestionCreateInput>;
};

export type QuestionRelateToOneForUpdateInput = {
  connect?: Maybe<QuestionWhereUniqueInput>;
  create?: Maybe<QuestionCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type QuestionUpdateArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateInput = {
  answers?: Maybe<AnswerRelateToManyForUpdateInput>;
  number?: Maybe<Scalars['Int']>;
};

export type QuestionWhereInput = {
  AND?: Maybe<Array<QuestionWhereInput>>;
  NOT?: Maybe<Array<QuestionWhereInput>>;
  OR?: Maybe<Array<QuestionWhereInput>>;
  id?: Maybe<IdFilter>;
  number?: Maybe<IntNullableFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
};

export type Range = {
  __typename?: 'Range';
  className?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Content>>;
  contentsCount?: Maybe<Scalars['Int']>;
  expanded?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insight?: Maybe<Insight>;
  logic?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
};


export type RangeContentsArgs = {
  orderBy?: Array<ContentOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: ContentWhereInput;
};


export type RangeContentsCountArgs = {
  where?: ContentWhereInput;
};

export type RangeCreateInput = {
  className?: Maybe<Scalars['String']>;
  contents?: Maybe<ContentRelateToManyForCreateInput>;
  expanded?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  insight?: Maybe<InsightRelateToOneForCreateInput>;
  logic?: Maybe<Scalars['JSON']>;
};

export type RangeManyRelationFilter = {
  every?: Maybe<RangeWhereInput>;
  none?: Maybe<RangeWhereInput>;
  some?: Maybe<RangeWhereInput>;
};

export type RangeOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type RangeRelateToManyForCreateInput = {
  connect?: Maybe<Array<RangeWhereUniqueInput>>;
  create?: Maybe<Array<RangeCreateInput>>;
};

export type RangeRelateToManyForUpdateInput = {
  connect?: Maybe<Array<RangeWhereUniqueInput>>;
  create?: Maybe<Array<RangeCreateInput>>;
  disconnect?: Maybe<Array<RangeWhereUniqueInput>>;
  set?: Maybe<Array<RangeWhereUniqueInput>>;
};

export type RangeRelateToOneForCreateInput = {
  connect?: Maybe<RangeWhereUniqueInput>;
  create?: Maybe<RangeCreateInput>;
};

export type RangeRelateToOneForUpdateInput = {
  connect?: Maybe<RangeWhereUniqueInput>;
  create?: Maybe<RangeCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type RangeUpdateArgs = {
  data: RangeUpdateInput;
  where: RangeWhereUniqueInput;
};

export type RangeUpdateInput = {
  className?: Maybe<Scalars['String']>;
  contents?: Maybe<ContentRelateToManyForUpdateInput>;
  expanded?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  insight?: Maybe<InsightRelateToOneForUpdateInput>;
  logic?: Maybe<Scalars['JSON']>;
};

export type RangeWhereInput = {
  AND?: Maybe<Array<RangeWhereInput>>;
  NOT?: Maybe<Array<RangeWhereInput>>;
  OR?: Maybe<Array<RangeWhereInput>>;
  className?: Maybe<StringNullableFilter>;
  contents?: Maybe<ContentManyRelationFilter>;
  id?: Maybe<IdFilter>;
  insight?: Maybe<InsightWhereInput>;
};

export type RangeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RedeemUserMagicAuthTokenFailure = {
  __typename?: 'RedeemUserMagicAuthTokenFailure';
  code: MagicLinkRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserMagicAuthTokenResult = RedeemUserMagicAuthTokenFailure | RedeemUserMagicAuthTokenSuccess;

export type RedeemUserMagicAuthTokenSuccess = {
  __typename?: 'RedeemUserMagicAuthTokenSuccess';
  item: User;
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  content?: Maybe<Resource_Content_DocumentField>;
  hide?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceCreateInput = {
  content?: Maybe<Scalars['JSON']>;
  hide?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ResourceUpdateArgs = {
  data: ResourceUpdateInput;
  where: ResourceWhereUniqueInput;
};

export type ResourceUpdateInput = {
  content?: Maybe<Scalars['JSON']>;
  hide?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ResourceWhereInput = {
  AND?: Maybe<Array<ResourceWhereInput>>;
  NOT?: Maybe<Array<ResourceWhereInput>>;
  OR?: Maybe<Array<ResourceWhereInput>>;
  id?: Maybe<IdFilter>;
  slug?: Maybe<StringNullableFilter>;
};

export type ResourceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type Resource_Content_DocumentField = {
  __typename?: 'Resource_content_DocumentField';
  document: Scalars['JSON'];
};


export type Resource_Content_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Score = {
  __typename?: 'Score';
  agreeableness?: Maybe<Scalars['Int']>;
  approach?: Maybe<Scalars['String']>;
  bodilyKinesthetic?: Maybe<Scalars['Int']>;
  communication?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['String']>;
  conscientiousness?: Maybe<Scalars['Int']>;
  consistency?: Maybe<Scalars['String']>;
  decision?: Maybe<Scalars['String']>;
  extraversion?: Maybe<Scalars['Int']>;
  flexibility?: Maybe<Scalars['String']>;
  focus?: Maybe<Scalars['String']>;
  fun?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interpersonal?: Maybe<Scalars['Int']>;
  intrapersonal?: Maybe<Scalars['Int']>;
  mathLogic?: Maybe<Scalars['Int']>;
  multitasking?: Maybe<Scalars['String']>;
  musical?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  neuroticism?: Maybe<Scalars['Int']>;
  openness?: Maybe<Scalars['Int']>;
  perspectives?: Maybe<Scalars['String']>;
  recognition?: Maybe<Scalars['String']>;
  spatial?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  verbalLinguistic?: Maybe<Scalars['Int']>;
};

export type ScoreCreateInput = {
  agreeableness?: Maybe<Scalars['Int']>;
  bodilyKinesthetic?: Maybe<Scalars['Int']>;
  conscientiousness?: Maybe<Scalars['Int']>;
  extraversion?: Maybe<Scalars['Int']>;
  interpersonal?: Maybe<Scalars['Int']>;
  intrapersonal?: Maybe<Scalars['Int']>;
  mathLogic?: Maybe<Scalars['Int']>;
  musical?: Maybe<Scalars['Int']>;
  neuroticism?: Maybe<Scalars['Int']>;
  openness?: Maybe<Scalars['Int']>;
  spatial?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneForCreateInput>;
  verbalLinguistic?: Maybe<Scalars['Int']>;
};

export type ScoreOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type ScoreRelateToOneForCreateInput = {
  connect?: Maybe<ScoreWhereUniqueInput>;
  create?: Maybe<ScoreCreateInput>;
};

export type ScoreRelateToOneForUpdateInput = {
  connect?: Maybe<ScoreWhereUniqueInput>;
  create?: Maybe<ScoreCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type ScoreUpdateArgs = {
  data: ScoreUpdateInput;
  where: ScoreWhereUniqueInput;
};

export type ScoreUpdateInput = {
  agreeableness?: Maybe<Scalars['Int']>;
  bodilyKinesthetic?: Maybe<Scalars['Int']>;
  conscientiousness?: Maybe<Scalars['Int']>;
  extraversion?: Maybe<Scalars['Int']>;
  interpersonal?: Maybe<Scalars['Int']>;
  intrapersonal?: Maybe<Scalars['Int']>;
  mathLogic?: Maybe<Scalars['Int']>;
  musical?: Maybe<Scalars['Int']>;
  neuroticism?: Maybe<Scalars['Int']>;
  openness?: Maybe<Scalars['Int']>;
  spatial?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
  verbalLinguistic?: Maybe<Scalars['Int']>;
};

export type ScoreWhereInput = {
  AND?: Maybe<Array<ScoreWhereInput>>;
  NOT?: Maybe<Array<ScoreWhereInput>>;
  OR?: Maybe<Array<ScoreWhereInput>>;
  agreeableness?: Maybe<IntNullableFilter>;
  bodilyKinesthetic?: Maybe<IntNullableFilter>;
  conscientiousness?: Maybe<IntNullableFilter>;
  extraversion?: Maybe<IntNullableFilter>;
  id?: Maybe<IdFilter>;
  interpersonal?: Maybe<IntNullableFilter>;
  intrapersonal?: Maybe<IntNullableFilter>;
  mathLogic?: Maybe<IntNullableFilter>;
  musical?: Maybe<IntNullableFilter>;
  neuroticism?: Maybe<IntNullableFilter>;
  openness?: Maybe<IntNullableFilter>;
  spatial?: Maybe<IntNullableFilter>;
  user?: Maybe<UserWhereInput>;
  verbalLinguistic?: Maybe<IntNullableFilter>;
};

export type ScoreWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ScoredCUser = {
  __typename?: 'ScoredCUser';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type SendUserMagicAuthLinkResult = {
  __typename?: 'SendUserMagicAuthLinkResult';
  code: MagicLinkRequestErrorCode;
  message: Scalars['String'];
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type SubContent = {
  __typename?: 'SubContent';
  content?: Maybe<Content>;
  fourth?: Maybe<Range>;
  id: Scalars['ID'];
  logic?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  second?: Maybe<Range>;
  subheadDescriptive?: Maybe<Scalars['String']>;
  subheadDiagnostic?: Maybe<Scalars['String']>;
  subheadPredictive?: Maybe<Scalars['String']>;
  subheadPrescriptive?: Maybe<Scalars['String']>;
  summaryDescriptive?: Maybe<Scalars['String']>;
  summaryDiagnostic?: Maybe<Scalars['String']>;
  summaryPredictive?: Maybe<Scalars['String']>;
  summaryPrescriptive?: Maybe<Scalars['String']>;
  third?: Maybe<Range>;
};

export type SubContentCreateInput = {
  content?: Maybe<ContentRelateToOneForCreateInput>;
  fourth?: Maybe<RangeRelateToOneForCreateInput>;
  logic?: Maybe<Scalars['JSON']>;
  second?: Maybe<RangeRelateToOneForCreateInput>;
  subheadDescriptive?: Maybe<Scalars['String']>;
  subheadDiagnostic?: Maybe<Scalars['String']>;
  subheadPredictive?: Maybe<Scalars['String']>;
  subheadPrescriptive?: Maybe<Scalars['String']>;
  summaryDescriptive?: Maybe<Scalars['String']>;
  summaryDiagnostic?: Maybe<Scalars['String']>;
  summaryPredictive?: Maybe<Scalars['String']>;
  summaryPrescriptive?: Maybe<Scalars['String']>;
  third?: Maybe<RangeRelateToOneForCreateInput>;
};

export type SubContentManyRelationFilter = {
  every?: Maybe<SubContentWhereInput>;
  none?: Maybe<SubContentWhereInput>;
  some?: Maybe<SubContentWhereInput>;
};

export type SubContentOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type SubContentRelateToManyForCreateInput = {
  connect?: Maybe<Array<SubContentWhereUniqueInput>>;
  create?: Maybe<Array<SubContentCreateInput>>;
};

export type SubContentRelateToManyForUpdateInput = {
  connect?: Maybe<Array<SubContentWhereUniqueInput>>;
  create?: Maybe<Array<SubContentCreateInput>>;
  disconnect?: Maybe<Array<SubContentWhereUniqueInput>>;
  set?: Maybe<Array<SubContentWhereUniqueInput>>;
};

export type SubContentUpdateArgs = {
  data: SubContentUpdateInput;
  where: SubContentWhereUniqueInput;
};

export type SubContentUpdateInput = {
  content?: Maybe<ContentRelateToOneForUpdateInput>;
  fourth?: Maybe<RangeRelateToOneForUpdateInput>;
  logic?: Maybe<Scalars['JSON']>;
  second?: Maybe<RangeRelateToOneForUpdateInput>;
  subheadDescriptive?: Maybe<Scalars['String']>;
  subheadDiagnostic?: Maybe<Scalars['String']>;
  subheadPredictive?: Maybe<Scalars['String']>;
  subheadPrescriptive?: Maybe<Scalars['String']>;
  summaryDescriptive?: Maybe<Scalars['String']>;
  summaryDiagnostic?: Maybe<Scalars['String']>;
  summaryPredictive?: Maybe<Scalars['String']>;
  summaryPrescriptive?: Maybe<Scalars['String']>;
  third?: Maybe<RangeRelateToOneForUpdateInput>;
};

export type SubContentWhereInput = {
  AND?: Maybe<Array<SubContentWhereInput>>;
  NOT?: Maybe<Array<SubContentWhereInput>>;
  OR?: Maybe<Array<SubContentWhereInput>>;
  content?: Maybe<ContentWhereInput>;
  fourth?: Maybe<RangeWhereInput>;
  id?: Maybe<IdFilter>;
  second?: Maybe<RangeWhereInput>;
  subheadDescriptive?: Maybe<StringNullableFilter>;
  subheadDiagnostic?: Maybe<StringNullableFilter>;
  subheadPredictive?: Maybe<StringNullableFilter>;
  subheadPrescriptive?: Maybe<StringNullableFilter>;
  summaryDescriptive?: Maybe<StringNullableFilter>;
  summaryDiagnostic?: Maybe<StringNullableFilter>;
  summaryPredictive?: Maybe<StringNullableFilter>;
  summaryPrescriptive?: Maybe<StringNullableFilter>;
  third?: Maybe<RangeWhereInput>;
};

export type SubContentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type User = {
  __typename?: 'User';
  connectionId?: Maybe<Scalars['String']>;
  connections?: Maybe<UserConnections>;
  customerId?: Maybe<Scalars['String']>;
  dominantTraits?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  eula?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  hasScore?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  invites?: Maybe<Array<Invite>>;
  invitesCount?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<PasswordState>;
  memberships?: Maybe<Array<Membership>>;
  membershipsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<PasswordState>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<Preference>;
  privacy?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<CloudinaryImage_File>;
  progress?: Maybe<Scalars['JSON']>;
  requests?: Maybe<Array<Invite>>;
  requestsCount?: Maybe<Scalars['Int']>;
  score?: Maybe<Score>;
  superAdmin?: Maybe<Scalars['Boolean']>;
  vus?: Maybe<Array<Vu>>;
  vusCount?: Maybe<Scalars['Int']>;
};


export type UserInvitesArgs = {
  orderBy?: Array<InviteOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: InviteWhereInput;
};


export type UserInvitesCountArgs = {
  where?: InviteWhereInput;
};


export type UserMembershipsArgs = {
  orderBy?: Array<MembershipOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: MembershipWhereInput;
};


export type UserMembershipsCountArgs = {
  where?: MembershipWhereInput;
};


export type UserRequestsArgs = {
  orderBy?: Array<InviteOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: InviteWhereInput;
};


export type UserRequestsCountArgs = {
  where?: InviteWhereInput;
};


export type UserVusArgs = {
  orderBy?: Array<VuOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: VuWhereInput;
};


export type UserVusCountArgs = {
  where?: VuWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserConnections = {
  __typename?: 'UserConnections';
  count?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type UserCreateInput = {
  connectionId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  eula?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  invites?: Maybe<InviteRelateToManyForCreateInput>;
  last?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  memberships?: Maybe<MembershipRelateToManyForCreateInput>;
  password?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<PreferenceRelateToOneForCreateInput>;
  privacy?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['Upload']>;
  progress?: Maybe<Scalars['JSON']>;
  requests?: Maybe<InviteRelateToManyForCreateInput>;
  score?: Maybe<ScoreRelateToOneForCreateInput>;
  superAdmin?: Maybe<Scalars['Boolean']>;
  vus?: Maybe<VuRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  first?: Maybe<OrderDirection>;
  id?: Maybe<OrderDirection>;
  last?: Maybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  connectionId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  eula?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['String']>;
  invites?: Maybe<InviteRelateToManyForUpdateInput>;
  last?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken?: Maybe<Scalars['String']>;
  memberships?: Maybe<MembershipRelateToManyForUpdateInput>;
  password?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetToken?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferences?: Maybe<PreferenceRelateToOneForUpdateInput>;
  privacy?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['Upload']>;
  progress?: Maybe<Scalars['JSON']>;
  requests?: Maybe<InviteRelateToManyForUpdateInput>;
  score?: Maybe<ScoreRelateToOneForUpdateInput>;
  superAdmin?: Maybe<Scalars['Boolean']>;
  vus?: Maybe<VuRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringNullableFilter>;
  first?: Maybe<StringNullableFilter>;
  id?: Maybe<IdFilter>;
  invites?: Maybe<InviteManyRelationFilter>;
  last?: Maybe<StringNullableFilter>;
  memberships?: Maybe<MembershipManyRelationFilter>;
  requests?: Maybe<InviteManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Vu = {
  __typename?: 'Vu';
  content?: Maybe<Array<Maybe<Content>>>;
  debug?: Maybe<Scalars['String']>;
  dynamics?: Maybe<Array<Maybe<VuDynamic>>>;
  group?: Maybe<Group>;
  id: Scalars['ID'];
  insights?: Maybe<Array<Maybe<Insight>>>;
  members?: Maybe<Array<User>>;
  membersCount?: Maybe<Scalars['Int']>;
  modules?: Maybe<Array<Maybe<Module>>>;
  name?: Maybe<Scalars['String']>;
  ranges?: Maybe<Array<Maybe<Range>>>;
  scores?: Maybe<Array<Maybe<Score>>>;
  subContents?: Maybe<Array<Maybe<SubContent>>>;
  unscoredUsersPresent?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type VuMembersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: Maybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type VuMembersCountArgs = {
  where?: UserWhereInput;
};

export type VuCreateInput = {
  group?: Maybe<GroupRelateToOneForCreateInput>;
  members?: Maybe<UserRelateToManyForCreateInput>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type VuDynamic = {
  __typename?: 'VuDynamic';
  name?: Maybe<Scalars['String']>;
  ranges?: Maybe<Array<Maybe<Dynamic>>>;
};

export type VuOrderByInput = {
  id?: Maybe<OrderDirection>;
};

export type VuRelateToManyForCreateInput = {
  connect?: Maybe<Array<VuWhereUniqueInput>>;
  create?: Maybe<Array<VuCreateInput>>;
};

export type VuRelateToManyForUpdateInput = {
  connect?: Maybe<Array<VuWhereUniqueInput>>;
  create?: Maybe<Array<VuCreateInput>>;
  disconnect?: Maybe<Array<VuWhereUniqueInput>>;
  set?: Maybe<Array<VuWhereUniqueInput>>;
};

export type VuUpdateArgs = {
  data: VuUpdateInput;
  where: VuWhereUniqueInput;
};

export type VuUpdateInput = {
  group?: Maybe<GroupRelateToOneForUpdateInput>;
  members?: Maybe<UserRelateToManyForUpdateInput>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type VuWhereInput = {
  AND?: Maybe<Array<VuWhereInput>>;
  NOT?: Maybe<Array<VuWhereInput>>;
  OR?: Maybe<Array<VuWhereInput>>;
  id?: Maybe<IdFilter>;
};

export type VuWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CommunicationContentQueryVariables = Exact<{
  ids: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type CommunicationContentQuery = (
  { __typename?: 'Query' }
  & { communicationContent?: Maybe<(
    { __typename?: 'CommunicationContent' }
    & Pick<CommunicationContent, 'debug'>
    & { order?: Maybe<Array<Maybe<(
      { __typename?: 'CUser' }
      & Pick<CUser, 'name' | 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'ScoredCUser' }
        & Pick<ScoredCUser, 'id' | 'class'>
      )>>> }
    )>>>, core?: Maybe<Array<Maybe<(
      { __typename?: 'CContent' }
      & Pick<CContent, 'key' | 'label' | 'content' | 'challenged' | 'dependent'>
    )>>>, addenda?: Maybe<Array<Maybe<(
      { __typename?: 'Addendum' }
      & Pick<Addendum, 'intelligence' | 'intelligenceRange' | 'rank' | 'subhead' | 'content'>
    )>>>, challenged?: Maybe<Array<Maybe<(
      { __typename?: 'CUser' }
      & Pick<CUser, 'name' | 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'ScoredCUser' }
        & Pick<ScoredCUser, 'id' | 'class'>
      )>>> }
    )>>> }
  )> }
);

export type MyConnectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyConnectionsQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { connections?: Maybe<(
      { __typename?: 'UserConnections' }
      & Pick<UserConnections, 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'email' | 'first'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GetVuQueryVariables = Exact<{
  ids: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['String']>;
}>;


export type GetVuQuery = (
  { __typename?: 'Query' }
  & { getVu?: Maybe<(
    { __typename?: 'Vu' }
    & Pick<Vu, 'unscoredUsersPresent'>
    & { content?: Maybe<Array<Maybe<(
      { __typename?: 'Content' }
      & Pick<Content, 'id' | 'contentType' | 'sixtyChar' | 'twentyFiveWord' | 'personalNote' | 'insight' | 'whenSecond' | 'whenThird' | 'whenFourth'>
      & { range?: Maybe<Array<(
        { __typename?: 'Range' }
        & Pick<Range, 'className'>
        & { insight?: Maybe<(
          { __typename?: 'Insight' }
          & Pick<Insight, 'name'>
        )> }
      )>>, subContents?: Maybe<Array<(
        { __typename?: 'SubContent' }
        & Pick<SubContent, 'id'>
      )>>, moduleContents?: Maybe<Array<(
        { __typename?: 'ModuleContent' }
        & Pick<ModuleContent, 'sixtyChar' | 'twentyFiveWord' | 'whenSecond' | 'whenThird' | 'whenFourth'>
        & { module?: Maybe<(
          { __typename?: 'Module' }
          & Pick<Module, 'key'>
        )> }
      )>> }
    )>>>, dynamics?: Maybe<Array<Maybe<(
      { __typename?: 'VuDynamic' }
      & Pick<VuDynamic, 'name'>
      & { ranges?: Maybe<Array<Maybe<(
        { __typename?: 'Dynamic' }
        & Pick<Dynamic, 'className' | 'count'>
        & { users?: Maybe<Array<Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        )>>> }
      )>>> }
    )>>> }
  )>, communicationContent?: Maybe<(
    { __typename?: 'CommunicationContent' }
    & Pick<CommunicationContent, 'debug'>
    & { order?: Maybe<Array<Maybe<(
      { __typename?: 'CUser' }
      & Pick<CUser, 'name' | 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'ScoredCUser' }
        & Pick<ScoredCUser, 'id' | 'class'>
      )>>> }
    )>>>, core?: Maybe<Array<Maybe<(
      { __typename?: 'CContent' }
      & Pick<CContent, 'key' | 'label' | 'content' | 'challenged' | 'dependent'>
    )>>>, addenda?: Maybe<Array<Maybe<(
      { __typename?: 'Addendum' }
      & Pick<Addendum, 'intelligence' | 'intelligenceRange' | 'rank' | 'subhead' | 'content'>
    )>>>, challenged?: Maybe<Array<Maybe<(
      { __typename?: 'CUser' }
      & Pick<CUser, 'name' | 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'ScoredCUser' }
        & Pick<ScoredCUser, 'id' | 'class'>
      )>>> }
    )>>> }
  )> }
);

export type GlobalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalsQuery = (
  { __typename?: 'Query' }
  & { resources?: Maybe<Array<(
    { __typename: 'Resource' }
    & Pick<Resource, 'slug' | 'title' | 'hide'>
  )>>, insights?: Maybe<Array<(
    { __typename?: 'Insight' }
    & Pick<Insight, 'name' | 'priority' | 'summary' | 'descriptive' | 'diagnostic' | 'predictive' | 'prescriptive'>
    & { ranges?: Maybe<Array<(
      { __typename?: 'Range' }
      & Pick<Range, 'className' | 'heading' | 'expanded'>
    )>> }
  )>>, modules?: Maybe<Array<(
    { __typename?: 'Module' }
    & Pick<Module, 'name' | 'key' | 'description' | 'priority' | 'type'>
    & { insights?: Maybe<Array<(
      { __typename?: 'Insight' }
      & Pick<Insight, 'name'>
    )>>, image?: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
    )> }
  )>> }
);

export type GetGroupInfoQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetGroupInfoQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { memberships?: Maybe<Array<(
      { __typename?: 'Membership' }
      & Pick<Membership, 'id'>
      & { group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'filename' | 'publicUrlTransformed'>
        )>, members?: Maybe<Array<(
          { __typename?: 'Membership' }
          & Pick<Membership, 'id' | 'role'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'first' | 'name' | 'email' | 'hasScore' | 'dominantTraits'>
            & { profilePicture?: Maybe<(
              { __typename?: 'CloudinaryImage_File' }
              & Pick<CloudinaryImage_File, 'filename' | 'publicUrlTransformed'>
            )> }
          )> }
        )>> }
      )> }
    )>> }
  )> }
);

export type GetUserInvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInvitesQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { invites?: Maybe<Array<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'created' | 'emailSent' | 'email'>
      & { acceptor?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>>, requests?: Maybe<Array<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'created'>
      & { initiator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>> }
  )> }
);

export type SendInvitesMutationVariables = Exact<{
  emails?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  groupId?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
}>;


export type SendInvitesMutation = (
  { __typename?: 'Mutation' }
  & { sendInvites?: Maybe<Array<Maybe<(
    { __typename?: 'MailgunResponse' }
    & Pick<MailgunResponse, 'message' | 'id' | 'email'>
  )>>> }
);

export type GetProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'first' | 'email' | 'dominantTraits'>
    & { profilePicture?: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
    )>, connections?: Maybe<(
      { __typename?: 'UserConnections' }
      & Pick<UserConnections, 'count'>
      & { users?: Maybe<Array<Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name' | 'first'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>>> }
    )> }
  )> }
);

export type RecentActivityQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type RecentActivityQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { invites?: Maybe<Array<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'created' | 'accepted' | 'email' | 'emailSent' | 'lastDate'>
      & { acceptor?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>>, requests?: Maybe<Array<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'created' | 'accepted' | 'lastDate'>
      & { initiator?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
        & { profilePicture?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>> }
  )> }
);

export type SubContentsQueryVariables = Exact<{
  ids?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type SubContentsQuery = (
  { __typename?: 'Query' }
  & { subContents?: Maybe<Array<(
    { __typename?: 'SubContent' }
    & Pick<SubContent, 'subheadDescriptive' | 'summaryDescriptive' | 'subheadDiagnostic' | 'summaryDiagnostic' | 'subheadPredictive' | 'summaryPredictive' | 'subheadPrescriptive' | 'summaryPrescriptive'>
    & { second?: Maybe<(
      { __typename?: 'Range' }
      & Pick<Range, 'className'>
    )>, third?: Maybe<(
      { __typename?: 'Range' }
      & Pick<Range, 'className'>
    )>, fourth?: Maybe<(
      { __typename?: 'Range' }
      & Pick<Range, 'className'>
    )> }
  )>> }
);

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'first' | 'dominantTraits'>
    & { profilePicture?: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
    )>, memberships?: Maybe<Array<(
      { __typename?: 'Membership' }
      & Pick<Membership, 'role'>
      & { group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name' | 'slug' | 'type'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>>, connections?: Maybe<(
      { __typename?: 'UserConnections' }
      & Pick<UserConnections, 'count'>
    )>, score?: Maybe<(
      { __typename?: 'Score' }
      & Pick<Score, 'communication' | 'approach' | 'consistency' | 'perspectives' | 'confidence' | 'flexibility' | 'focus' | 'fun' | 'multitasking' | 'recognition' | 'decision'>
    )> }
  )> }
);

export type UserCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCheckQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Addendum: ResolverTypeWrapper<Addendum>;
  AddendumCreateInput: AddendumCreateInput;
  AddendumOrderByInput: AddendumOrderByInput;
  AddendumUpdateArgs: AddendumUpdateArgs;
  AddendumUpdateInput: AddendumUpdateInput;
  AddendumWhereInput: AddendumWhereInput;
  AddendumWhereUniqueInput: AddendumWhereUniqueInput;
  Answer: ResolverTypeWrapper<Answer>;
  AnswerCreateInput: AnswerCreateInput;
  AnswerOrderByInput: AnswerOrderByInput;
  AnswerRelateToManyForCreateInput: AnswerRelateToManyForCreateInput;
  AnswerRelateToManyForUpdateInput: AnswerRelateToManyForUpdateInput;
  AnswerUpdateArgs: AnswerUpdateArgs;
  AnswerUpdateInput: AnswerUpdateInput;
  AnswerWhereInput: AnswerWhereInput;
  AnswerWhereUniqueInput: AnswerWhereUniqueInput;
  AuthenticatedItem: ResolversTypes['User'];
  BetterMeeting: ResolverTypeWrapper<BetterMeeting>;
  BetterMeetingCreateInput: BetterMeetingCreateInput;
  BetterMeetingOrderByInput: BetterMeetingOrderByInput;
  BetterMeetingUpdateArgs: BetterMeetingUpdateArgs;
  BetterMeetingUpdateInput: BetterMeetingUpdateInput;
  BetterMeetingWhereInput: BetterMeetingWhereInput;
  BetterMeetingWhereUniqueInput: BetterMeetingWhereUniqueInput;
  BetterMeetingsContent: ResolverTypeWrapper<BetterMeetingsContent>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanNullableFilter: BooleanNullableFilter;
  BraintreeToken: ResolverTypeWrapper<BraintreeToken>;
  CContent: ResolverTypeWrapper<CContent>;
  CUser: ResolverTypeWrapper<CUser>;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: ResolverTypeWrapper<CloudinaryImage_File>;
  Communication: ResolverTypeWrapper<Communication>;
  CommunicationContent: ResolverTypeWrapper<CommunicationContent>;
  CommunicationCreateInput: CommunicationCreateInput;
  CommunicationOrderByInput: CommunicationOrderByInput;
  CommunicationRelateToOneForCreateInput: CommunicationRelateToOneForCreateInput;
  CommunicationRelateToOneForUpdateInput: CommunicationRelateToOneForUpdateInput;
  CommunicationUpdateArgs: CommunicationUpdateArgs;
  CommunicationUpdateInput: CommunicationUpdateInput;
  CommunicationWhereInput: CommunicationWhereInput;
  CommunicationWhereUniqueInput: CommunicationWhereUniqueInput;
  Connection: ResolverTypeWrapper<Connection>;
  ConnectionCreateInput: ConnectionCreateInput;
  ConnectionOrderByInput: ConnectionOrderByInput;
  ConnectionUpdateArgs: ConnectionUpdateArgs;
  ConnectionUpdateInput: ConnectionUpdateInput;
  ConnectionWhereInput: ConnectionWhereInput;
  ConnectionWhereUniqueInput: ConnectionWhereUniqueInput;
  Content: ResolverTypeWrapper<Content>;
  ContentCreateInput: ContentCreateInput;
  ContentManyRelationFilter: ContentManyRelationFilter;
  ContentOrderByInput: ContentOrderByInput;
  ContentRelateToManyForCreateInput: ContentRelateToManyForCreateInput;
  ContentRelateToManyForUpdateInput: ContentRelateToManyForUpdateInput;
  ContentRelateToOneForCreateInput: ContentRelateToOneForCreateInput;
  ContentRelateToOneForUpdateInput: ContentRelateToOneForUpdateInput;
  ContentUpdateArgs: ContentUpdateArgs;
  ContentUpdateInput: ContentUpdateInput;
  ContentWhereInput: ContentWhereInput;
  ContentWhereUniqueInput: ContentWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Dynamic: ResolverTypeWrapper<Dynamic>;
  GeneralResponse: ResolverTypeWrapper<GeneralResponse>;
  Group: ResolverTypeWrapper<Group>;
  GroupCreateInput: GroupCreateInput;
  GroupOrderByInput: GroupOrderByInput;
  GroupRelateToOneForCreateInput: GroupRelateToOneForCreateInput;
  GroupRelateToOneForUpdateInput: GroupRelateToOneForUpdateInput;
  GroupUpdateArgs: GroupUpdateArgs;
  GroupUpdateInput: GroupUpdateInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilter: IdFilter;
  Insight: ResolverTypeWrapper<Insight>;
  InsightCreateInput: InsightCreateInput;
  InsightOrderByInput: InsightOrderByInput;
  InsightRelateToManyForCreateInput: InsightRelateToManyForCreateInput;
  InsightRelateToManyForUpdateInput: InsightRelateToManyForUpdateInput;
  InsightRelateToOneForCreateInput: InsightRelateToOneForCreateInput;
  InsightRelateToOneForUpdateInput: InsightRelateToOneForUpdateInput;
  InsightUpdateArgs: InsightUpdateArgs;
  InsightUpdateInput: InsightUpdateInput;
  InsightWhereInput: InsightWhereInput;
  InsightWhereUniqueInput: InsightWhereUniqueInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntNullableFilter: IntNullableFilter;
  Invite: ResolverTypeWrapper<Invite>;
  InviteCreateInput: InviteCreateInput;
  InviteManyRelationFilter: InviteManyRelationFilter;
  InviteOrderByInput: InviteOrderByInput;
  InviteRelateToManyForCreateInput: InviteRelateToManyForCreateInput;
  InviteRelateToManyForUpdateInput: InviteRelateToManyForUpdateInput;
  InviteResponse: ResolverTypeWrapper<InviteResponse>;
  InviteUpdateArgs: InviteUpdateArgs;
  InviteUpdateInput: InviteUpdateInput;
  InviteWhereInput: InviteWhereInput;
  InviteWhereUniqueInput: InviteWhereUniqueInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KeystoneAdminMeta: ResolverTypeWrapper<KeystoneAdminMeta>;
  KeystoneAdminUIFieldMeta: ResolverTypeWrapper<KeystoneAdminUiFieldMeta>;
  KeystoneAdminUIFieldMetaCreateView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaCreateView>;
  KeystoneAdminUIFieldMetaCreateViewFieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
  KeystoneAdminUIFieldMetaItemView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaItemView>;
  KeystoneAdminUIFieldMetaItemViewFieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
  KeystoneAdminUIFieldMetaListView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaListView>;
  KeystoneAdminUIFieldMetaListViewFieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
  KeystoneAdminUIListMeta: ResolverTypeWrapper<KeystoneAdminUiListMeta>;
  KeystoneAdminUISort: ResolverTypeWrapper<KeystoneAdminUiSort>;
  KeystoneAdminUISortDirection: KeystoneAdminUiSortDirection;
  KeystoneMeta: ResolverTypeWrapper<KeystoneMeta>;
  MagicLinkRedemptionErrorCode: MagicLinkRedemptionErrorCode;
  MagicLinkRequestErrorCode: MagicLinkRequestErrorCode;
  MailgunResponse: ResolverTypeWrapper<MailgunResponse>;
  Membership: ResolverTypeWrapper<Membership>;
  MembershipCreateInput: MembershipCreateInput;
  MembershipManyRelationFilter: MembershipManyRelationFilter;
  MembershipOrderByInput: MembershipOrderByInput;
  MembershipRelateToManyForCreateInput: MembershipRelateToManyForCreateInput;
  MembershipRelateToManyForUpdateInput: MembershipRelateToManyForUpdateInput;
  MembershipUpdateArgs: MembershipUpdateArgs;
  MembershipUpdateInput: MembershipUpdateInput;
  MembershipWhereInput: MembershipWhereInput;
  MembershipWhereUniqueInput: MembershipWhereUniqueInput;
  Module: ResolverTypeWrapper<Module>;
  ModuleContent: ResolverTypeWrapper<ModuleContent>;
  ModuleContentCreateInput: ModuleContentCreateInput;
  ModuleContentManyRelationFilter: ModuleContentManyRelationFilter;
  ModuleContentOrderByInput: ModuleContentOrderByInput;
  ModuleContentRelateToManyForCreateInput: ModuleContentRelateToManyForCreateInput;
  ModuleContentRelateToManyForUpdateInput: ModuleContentRelateToManyForUpdateInput;
  ModuleContentUpdateArgs: ModuleContentUpdateArgs;
  ModuleContentUpdateInput: ModuleContentUpdateInput;
  ModuleContentWhereInput: ModuleContentWhereInput;
  ModuleContentWhereUniqueInput: ModuleContentWhereUniqueInput;
  ModuleCreateInput: ModuleCreateInput;
  ModuleOrderByInput: ModuleOrderByInput;
  ModuleRelateToManyForCreateInput: ModuleRelateToManyForCreateInput;
  ModuleRelateToManyForUpdateInput: ModuleRelateToManyForUpdateInput;
  ModuleRelateToOneForCreateInput: ModuleRelateToOneForCreateInput;
  ModuleRelateToOneForUpdateInput: ModuleRelateToOneForUpdateInput;
  ModuleUpdateArgs: ModuleUpdateArgs;
  ModuleUpdateInput: ModuleUpdateInput;
  ModuleWhereInput: ModuleWhereInput;
  ModuleWhereUniqueInput: ModuleWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NewGroupResponse: ResolverTypeWrapper<NewGroupResponse>;
  OrderDirection: OrderDirection;
  PasswordAuthErrorCode: PasswordAuthErrorCode;
  PasswordResetRedemptionErrorCode: PasswordResetRedemptionErrorCode;
  PasswordResetRequestErrorCode: PasswordResetRequestErrorCode;
  PasswordState: ResolverTypeWrapper<PasswordState>;
  Plan: ResolverTypeWrapper<Plan>;
  PlanCreateInput: PlanCreateInput;
  PlanOrderByInput: PlanOrderByInput;
  PlanRelateToOneForCreateInput: PlanRelateToOneForCreateInput;
  PlanRelateToOneForUpdateInput: PlanRelateToOneForUpdateInput;
  PlanUpdateArgs: PlanUpdateArgs;
  PlanUpdateInput: PlanUpdateInput;
  PlanWhereInput: PlanWhereInput;
  PlanWhereUniqueInput: PlanWhereUniqueInput;
  Policy: ResolverTypeWrapper<Policy>;
  PolicyCreateInput: PolicyCreateInput;
  PolicyOrderByInput: PolicyOrderByInput;
  PolicyUpdateArgs: PolicyUpdateArgs;
  PolicyUpdateInput: PolicyUpdateInput;
  PolicyWhereInput: PolicyWhereInput;
  PolicyWhereUniqueInput: PolicyWhereUniqueInput;
  Policy_policy_DocumentField: ResolverTypeWrapper<Policy_Policy_DocumentField>;
  Preference: ResolverTypeWrapper<Preference>;
  PreferenceCreateInput: PreferenceCreateInput;
  PreferenceOrderByInput: PreferenceOrderByInput;
  PreferenceRelateToOneForCreateInput: PreferenceRelateToOneForCreateInput;
  PreferenceRelateToOneForUpdateInput: PreferenceRelateToOneForUpdateInput;
  PreferenceUpdateArgs: PreferenceUpdateArgs;
  PreferenceUpdateInput: PreferenceUpdateInput;
  PreferenceWhereInput: PreferenceWhereInput;
  PreferenceWhereUniqueInput: PreferenceWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Question: ResolverTypeWrapper<Question>;
  QuestionCreateInput: QuestionCreateInput;
  QuestionOrderByInput: QuestionOrderByInput;
  QuestionRelateToOneForCreateInput: QuestionRelateToOneForCreateInput;
  QuestionRelateToOneForUpdateInput: QuestionRelateToOneForUpdateInput;
  QuestionUpdateArgs: QuestionUpdateArgs;
  QuestionUpdateInput: QuestionUpdateInput;
  QuestionWhereInput: QuestionWhereInput;
  QuestionWhereUniqueInput: QuestionWhereUniqueInput;
  Range: ResolverTypeWrapper<Range>;
  RangeCreateInput: RangeCreateInput;
  RangeManyRelationFilter: RangeManyRelationFilter;
  RangeOrderByInput: RangeOrderByInput;
  RangeRelateToManyForCreateInput: RangeRelateToManyForCreateInput;
  RangeRelateToManyForUpdateInput: RangeRelateToManyForUpdateInput;
  RangeRelateToOneForCreateInput: RangeRelateToOneForCreateInput;
  RangeRelateToOneForUpdateInput: RangeRelateToOneForUpdateInput;
  RangeUpdateArgs: RangeUpdateArgs;
  RangeUpdateInput: RangeUpdateInput;
  RangeWhereInput: RangeWhereInput;
  RangeWhereUniqueInput: RangeWhereUniqueInput;
  RedeemUserMagicAuthTokenFailure: ResolverTypeWrapper<RedeemUserMagicAuthTokenFailure>;
  RedeemUserMagicAuthTokenResult: ResolversTypes['RedeemUserMagicAuthTokenFailure'] | ResolversTypes['RedeemUserMagicAuthTokenSuccess'];
  RedeemUserMagicAuthTokenSuccess: ResolverTypeWrapper<RedeemUserMagicAuthTokenSuccess>;
  RedeemUserPasswordResetTokenResult: ResolverTypeWrapper<RedeemUserPasswordResetTokenResult>;
  Resource: ResolverTypeWrapper<Resource>;
  ResourceCreateInput: ResourceCreateInput;
  ResourceOrderByInput: ResourceOrderByInput;
  ResourceUpdateArgs: ResourceUpdateArgs;
  ResourceUpdateInput: ResourceUpdateInput;
  ResourceWhereInput: ResourceWhereInput;
  ResourceWhereUniqueInput: ResourceWhereUniqueInput;
  Resource_content_DocumentField: ResolverTypeWrapper<Resource_Content_DocumentField>;
  Score: ResolverTypeWrapper<Score>;
  ScoreCreateInput: ScoreCreateInput;
  ScoreOrderByInput: ScoreOrderByInput;
  ScoreRelateToOneForCreateInput: ScoreRelateToOneForCreateInput;
  ScoreRelateToOneForUpdateInput: ScoreRelateToOneForUpdateInput;
  ScoreUpdateArgs: ScoreUpdateArgs;
  ScoreUpdateInput: ScoreUpdateInput;
  ScoreWhereInput: ScoreWhereInput;
  ScoreWhereUniqueInput: ScoreWhereUniqueInput;
  ScoredCUser: ResolverTypeWrapper<ScoredCUser>;
  SendUserMagicAuthLinkResult: ResolverTypeWrapper<SendUserMagicAuthLinkResult>;
  SendUserPasswordResetLinkResult: ResolverTypeWrapper<SendUserPasswordResetLinkResult>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringNullableFilter: StringNullableFilter;
  SubContent: ResolverTypeWrapper<SubContent>;
  SubContentCreateInput: SubContentCreateInput;
  SubContentManyRelationFilter: SubContentManyRelationFilter;
  SubContentOrderByInput: SubContentOrderByInput;
  SubContentRelateToManyForCreateInput: SubContentRelateToManyForCreateInput;
  SubContentRelateToManyForUpdateInput: SubContentRelateToManyForUpdateInput;
  SubContentUpdateArgs: SubContentUpdateArgs;
  SubContentUpdateInput: SubContentUpdateInput;
  SubContentWhereInput: SubContentWhereInput;
  SubContentWhereUniqueInput: SubContentWhereUniqueInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserAuthenticationWithPasswordFailure: ResolverTypeWrapper<UserAuthenticationWithPasswordFailure>;
  UserAuthenticationWithPasswordResult: ResolversTypes['UserAuthenticationWithPasswordFailure'] | ResolversTypes['UserAuthenticationWithPasswordSuccess'];
  UserAuthenticationWithPasswordSuccess: ResolverTypeWrapper<UserAuthenticationWithPasswordSuccess>;
  UserConnections: ResolverTypeWrapper<UserConnections>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToManyForCreateInput: UserRelateToManyForCreateInput;
  UserRelateToManyForUpdateInput: UserRelateToManyForUpdateInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateUserPasswordResetTokenResult: ResolverTypeWrapper<ValidateUserPasswordResetTokenResult>;
  Vu: ResolverTypeWrapper<Vu>;
  VuCreateInput: VuCreateInput;
  VuDynamic: ResolverTypeWrapper<VuDynamic>;
  VuOrderByInput: VuOrderByInput;
  VuRelateToManyForCreateInput: VuRelateToManyForCreateInput;
  VuRelateToManyForUpdateInput: VuRelateToManyForUpdateInput;
  VuUpdateArgs: VuUpdateArgs;
  VuUpdateInput: VuUpdateInput;
  VuWhereInput: VuWhereInput;
  VuWhereUniqueInput: VuWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Addendum: Addendum;
  AddendumCreateInput: AddendumCreateInput;
  AddendumOrderByInput: AddendumOrderByInput;
  AddendumUpdateArgs: AddendumUpdateArgs;
  AddendumUpdateInput: AddendumUpdateInput;
  AddendumWhereInput: AddendumWhereInput;
  AddendumWhereUniqueInput: AddendumWhereUniqueInput;
  Answer: Answer;
  AnswerCreateInput: AnswerCreateInput;
  AnswerOrderByInput: AnswerOrderByInput;
  AnswerRelateToManyForCreateInput: AnswerRelateToManyForCreateInput;
  AnswerRelateToManyForUpdateInput: AnswerRelateToManyForUpdateInput;
  AnswerUpdateArgs: AnswerUpdateArgs;
  AnswerUpdateInput: AnswerUpdateInput;
  AnswerWhereInput: AnswerWhereInput;
  AnswerWhereUniqueInput: AnswerWhereUniqueInput;
  AuthenticatedItem: ResolversParentTypes['User'];
  BetterMeeting: BetterMeeting;
  BetterMeetingCreateInput: BetterMeetingCreateInput;
  BetterMeetingOrderByInput: BetterMeetingOrderByInput;
  BetterMeetingUpdateArgs: BetterMeetingUpdateArgs;
  BetterMeetingUpdateInput: BetterMeetingUpdateInput;
  BetterMeetingWhereInput: BetterMeetingWhereInput;
  BetterMeetingWhereUniqueInput: BetterMeetingWhereUniqueInput;
  BetterMeetingsContent: BetterMeetingsContent;
  Boolean: Scalars['Boolean'];
  BooleanNullableFilter: BooleanNullableFilter;
  BraintreeToken: BraintreeToken;
  CContent: CContent;
  CUser: CUser;
  CloudinaryImageFormat: CloudinaryImageFormat;
  CloudinaryImage_File: CloudinaryImage_File;
  Communication: Communication;
  CommunicationContent: CommunicationContent;
  CommunicationCreateInput: CommunicationCreateInput;
  CommunicationOrderByInput: CommunicationOrderByInput;
  CommunicationRelateToOneForCreateInput: CommunicationRelateToOneForCreateInput;
  CommunicationRelateToOneForUpdateInput: CommunicationRelateToOneForUpdateInput;
  CommunicationUpdateArgs: CommunicationUpdateArgs;
  CommunicationUpdateInput: CommunicationUpdateInput;
  CommunicationWhereInput: CommunicationWhereInput;
  CommunicationWhereUniqueInput: CommunicationWhereUniqueInput;
  Connection: Connection;
  ConnectionCreateInput: ConnectionCreateInput;
  ConnectionOrderByInput: ConnectionOrderByInput;
  ConnectionUpdateArgs: ConnectionUpdateArgs;
  ConnectionUpdateInput: ConnectionUpdateInput;
  ConnectionWhereInput: ConnectionWhereInput;
  ConnectionWhereUniqueInput: ConnectionWhereUniqueInput;
  Content: Content;
  ContentCreateInput: ContentCreateInput;
  ContentManyRelationFilter: ContentManyRelationFilter;
  ContentOrderByInput: ContentOrderByInput;
  ContentRelateToManyForCreateInput: ContentRelateToManyForCreateInput;
  ContentRelateToManyForUpdateInput: ContentRelateToManyForUpdateInput;
  ContentRelateToOneForCreateInput: ContentRelateToOneForCreateInput;
  ContentRelateToOneForUpdateInput: ContentRelateToOneForUpdateInput;
  ContentUpdateArgs: ContentUpdateArgs;
  ContentUpdateInput: ContentUpdateInput;
  ContentWhereInput: ContentWhereInput;
  ContentWhereUniqueInput: ContentWhereUniqueInput;
  CreateInitialUserInput: CreateInitialUserInput;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Dynamic: Dynamic;
  GeneralResponse: GeneralResponse;
  Group: Group;
  GroupCreateInput: GroupCreateInput;
  GroupOrderByInput: GroupOrderByInput;
  GroupRelateToOneForCreateInput: GroupRelateToOneForCreateInput;
  GroupRelateToOneForUpdateInput: GroupRelateToOneForUpdateInput;
  GroupUpdateArgs: GroupUpdateArgs;
  GroupUpdateInput: GroupUpdateInput;
  GroupWhereInput: GroupWhereInput;
  GroupWhereUniqueInput: GroupWhereUniqueInput;
  ID: Scalars['ID'];
  IDFilter: IdFilter;
  Insight: Insight;
  InsightCreateInput: InsightCreateInput;
  InsightOrderByInput: InsightOrderByInput;
  InsightRelateToManyForCreateInput: InsightRelateToManyForCreateInput;
  InsightRelateToManyForUpdateInput: InsightRelateToManyForUpdateInput;
  InsightRelateToOneForCreateInput: InsightRelateToOneForCreateInput;
  InsightRelateToOneForUpdateInput: InsightRelateToOneForUpdateInput;
  InsightUpdateArgs: InsightUpdateArgs;
  InsightUpdateInput: InsightUpdateInput;
  InsightWhereInput: InsightWhereInput;
  InsightWhereUniqueInput: InsightWhereUniqueInput;
  Int: Scalars['Int'];
  IntNullableFilter: IntNullableFilter;
  Invite: Invite;
  InviteCreateInput: InviteCreateInput;
  InviteManyRelationFilter: InviteManyRelationFilter;
  InviteOrderByInput: InviteOrderByInput;
  InviteRelateToManyForCreateInput: InviteRelateToManyForCreateInput;
  InviteRelateToManyForUpdateInput: InviteRelateToManyForUpdateInput;
  InviteResponse: InviteResponse;
  InviteUpdateArgs: InviteUpdateArgs;
  InviteUpdateInput: InviteUpdateInput;
  InviteWhereInput: InviteWhereInput;
  InviteWhereUniqueInput: InviteWhereUniqueInput;
  JSON: Scalars['JSON'];
  KeystoneAdminMeta: KeystoneAdminMeta;
  KeystoneAdminUIFieldMeta: KeystoneAdminUiFieldMeta;
  KeystoneAdminUIFieldMetaCreateView: KeystoneAdminUiFieldMetaCreateView;
  KeystoneAdminUIFieldMetaItemView: KeystoneAdminUiFieldMetaItemView;
  KeystoneAdminUIFieldMetaListView: KeystoneAdminUiFieldMetaListView;
  KeystoneAdminUIListMeta: KeystoneAdminUiListMeta;
  KeystoneAdminUISort: KeystoneAdminUiSort;
  KeystoneMeta: KeystoneMeta;
  MailgunResponse: MailgunResponse;
  Membership: Membership;
  MembershipCreateInput: MembershipCreateInput;
  MembershipManyRelationFilter: MembershipManyRelationFilter;
  MembershipOrderByInput: MembershipOrderByInput;
  MembershipRelateToManyForCreateInput: MembershipRelateToManyForCreateInput;
  MembershipRelateToManyForUpdateInput: MembershipRelateToManyForUpdateInput;
  MembershipUpdateArgs: MembershipUpdateArgs;
  MembershipUpdateInput: MembershipUpdateInput;
  MembershipWhereInput: MembershipWhereInput;
  MembershipWhereUniqueInput: MembershipWhereUniqueInput;
  Module: Module;
  ModuleContent: ModuleContent;
  ModuleContentCreateInput: ModuleContentCreateInput;
  ModuleContentManyRelationFilter: ModuleContentManyRelationFilter;
  ModuleContentOrderByInput: ModuleContentOrderByInput;
  ModuleContentRelateToManyForCreateInput: ModuleContentRelateToManyForCreateInput;
  ModuleContentRelateToManyForUpdateInput: ModuleContentRelateToManyForUpdateInput;
  ModuleContentUpdateArgs: ModuleContentUpdateArgs;
  ModuleContentUpdateInput: ModuleContentUpdateInput;
  ModuleContentWhereInput: ModuleContentWhereInput;
  ModuleContentWhereUniqueInput: ModuleContentWhereUniqueInput;
  ModuleCreateInput: ModuleCreateInput;
  ModuleOrderByInput: ModuleOrderByInput;
  ModuleRelateToManyForCreateInput: ModuleRelateToManyForCreateInput;
  ModuleRelateToManyForUpdateInput: ModuleRelateToManyForUpdateInput;
  ModuleRelateToOneForCreateInput: ModuleRelateToOneForCreateInput;
  ModuleRelateToOneForUpdateInput: ModuleRelateToOneForUpdateInput;
  ModuleUpdateArgs: ModuleUpdateArgs;
  ModuleUpdateInput: ModuleUpdateInput;
  ModuleWhereInput: ModuleWhereInput;
  ModuleWhereUniqueInput: ModuleWhereUniqueInput;
  Mutation: {};
  NestedStringNullableFilter: NestedStringNullableFilter;
  NewGroupResponse: NewGroupResponse;
  PasswordState: PasswordState;
  Plan: Plan;
  PlanCreateInput: PlanCreateInput;
  PlanOrderByInput: PlanOrderByInput;
  PlanRelateToOneForCreateInput: PlanRelateToOneForCreateInput;
  PlanRelateToOneForUpdateInput: PlanRelateToOneForUpdateInput;
  PlanUpdateArgs: PlanUpdateArgs;
  PlanUpdateInput: PlanUpdateInput;
  PlanWhereInput: PlanWhereInput;
  PlanWhereUniqueInput: PlanWhereUniqueInput;
  Policy: Policy;
  PolicyCreateInput: PolicyCreateInput;
  PolicyOrderByInput: PolicyOrderByInput;
  PolicyUpdateArgs: PolicyUpdateArgs;
  PolicyUpdateInput: PolicyUpdateInput;
  PolicyWhereInput: PolicyWhereInput;
  PolicyWhereUniqueInput: PolicyWhereUniqueInput;
  Policy_policy_DocumentField: Policy_Policy_DocumentField;
  Preference: Preference;
  PreferenceCreateInput: PreferenceCreateInput;
  PreferenceOrderByInput: PreferenceOrderByInput;
  PreferenceRelateToOneForCreateInput: PreferenceRelateToOneForCreateInput;
  PreferenceRelateToOneForUpdateInput: PreferenceRelateToOneForUpdateInput;
  PreferenceUpdateArgs: PreferenceUpdateArgs;
  PreferenceUpdateInput: PreferenceUpdateInput;
  PreferenceWhereInput: PreferenceWhereInput;
  PreferenceWhereUniqueInput: PreferenceWhereUniqueInput;
  Query: {};
  Question: Question;
  QuestionCreateInput: QuestionCreateInput;
  QuestionOrderByInput: QuestionOrderByInput;
  QuestionRelateToOneForCreateInput: QuestionRelateToOneForCreateInput;
  QuestionRelateToOneForUpdateInput: QuestionRelateToOneForUpdateInput;
  QuestionUpdateArgs: QuestionUpdateArgs;
  QuestionUpdateInput: QuestionUpdateInput;
  QuestionWhereInput: QuestionWhereInput;
  QuestionWhereUniqueInput: QuestionWhereUniqueInput;
  Range: Range;
  RangeCreateInput: RangeCreateInput;
  RangeManyRelationFilter: RangeManyRelationFilter;
  RangeOrderByInput: RangeOrderByInput;
  RangeRelateToManyForCreateInput: RangeRelateToManyForCreateInput;
  RangeRelateToManyForUpdateInput: RangeRelateToManyForUpdateInput;
  RangeRelateToOneForCreateInput: RangeRelateToOneForCreateInput;
  RangeRelateToOneForUpdateInput: RangeRelateToOneForUpdateInput;
  RangeUpdateArgs: RangeUpdateArgs;
  RangeUpdateInput: RangeUpdateInput;
  RangeWhereInput: RangeWhereInput;
  RangeWhereUniqueInput: RangeWhereUniqueInput;
  RedeemUserMagicAuthTokenFailure: RedeemUserMagicAuthTokenFailure;
  RedeemUserMagicAuthTokenResult: ResolversParentTypes['RedeemUserMagicAuthTokenFailure'] | ResolversParentTypes['RedeemUserMagicAuthTokenSuccess'];
  RedeemUserMagicAuthTokenSuccess: RedeemUserMagicAuthTokenSuccess;
  RedeemUserPasswordResetTokenResult: RedeemUserPasswordResetTokenResult;
  Resource: Resource;
  ResourceCreateInput: ResourceCreateInput;
  ResourceOrderByInput: ResourceOrderByInput;
  ResourceUpdateArgs: ResourceUpdateArgs;
  ResourceUpdateInput: ResourceUpdateInput;
  ResourceWhereInput: ResourceWhereInput;
  ResourceWhereUniqueInput: ResourceWhereUniqueInput;
  Resource_content_DocumentField: Resource_Content_DocumentField;
  Score: Score;
  ScoreCreateInput: ScoreCreateInput;
  ScoreOrderByInput: ScoreOrderByInput;
  ScoreRelateToOneForCreateInput: ScoreRelateToOneForCreateInput;
  ScoreRelateToOneForUpdateInput: ScoreRelateToOneForUpdateInput;
  ScoreUpdateArgs: ScoreUpdateArgs;
  ScoreUpdateInput: ScoreUpdateInput;
  ScoreWhereInput: ScoreWhereInput;
  ScoreWhereUniqueInput: ScoreWhereUniqueInput;
  ScoredCUser: ScoredCUser;
  SendUserMagicAuthLinkResult: SendUserMagicAuthLinkResult;
  SendUserPasswordResetLinkResult: SendUserPasswordResetLinkResult;
  String: Scalars['String'];
  StringNullableFilter: StringNullableFilter;
  SubContent: SubContent;
  SubContentCreateInput: SubContentCreateInput;
  SubContentManyRelationFilter: SubContentManyRelationFilter;
  SubContentOrderByInput: SubContentOrderByInput;
  SubContentRelateToManyForCreateInput: SubContentRelateToManyForCreateInput;
  SubContentRelateToManyForUpdateInput: SubContentRelateToManyForUpdateInput;
  SubContentUpdateArgs: SubContentUpdateArgs;
  SubContentUpdateInput: SubContentUpdateInput;
  SubContentWhereInput: SubContentWhereInput;
  SubContentWhereUniqueInput: SubContentWhereUniqueInput;
  Upload: Scalars['Upload'];
  User: User;
  UserAuthenticationWithPasswordFailure: UserAuthenticationWithPasswordFailure;
  UserAuthenticationWithPasswordResult: ResolversParentTypes['UserAuthenticationWithPasswordFailure'] | ResolversParentTypes['UserAuthenticationWithPasswordSuccess'];
  UserAuthenticationWithPasswordSuccess: UserAuthenticationWithPasswordSuccess;
  UserConnections: UserConnections;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToManyForCreateInput: UserRelateToManyForCreateInput;
  UserRelateToManyForUpdateInput: UserRelateToManyForUpdateInput;
  UserRelateToOneForCreateInput: UserRelateToOneForCreateInput;
  UserRelateToOneForUpdateInput: UserRelateToOneForUpdateInput;
  UserUpdateArgs: UserUpdateArgs;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  ValidateUserPasswordResetTokenResult: ValidateUserPasswordResetTokenResult;
  Vu: Vu;
  VuCreateInput: VuCreateInput;
  VuDynamic: VuDynamic;
  VuOrderByInput: VuOrderByInput;
  VuRelateToManyForCreateInput: VuRelateToManyForCreateInput;
  VuRelateToManyForUpdateInput: VuRelateToManyForUpdateInput;
  VuUpdateArgs: VuUpdateArgs;
  VuUpdateInput: VuUpdateInput;
  VuWhereInput: VuWhereInput;
  VuWhereUniqueInput: VuWhereUniqueInput;
};

export type AddendumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Addendum'] = ResolversParentTypes['Addendum']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intelligence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intelligenceRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  range?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subhead?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  intelligence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticatedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatedItem'] = ResolversParentTypes['AuthenticatedItem']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type BetterMeetingResolvers<ContextType = any, ParentType extends ResolversParentTypes['BetterMeeting'] = ResolversParentTypes['BetterMeeting']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subModule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BetterMeetingsContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BetterMeetingsContent'] = ResolversParentTypes['BetterMeetingsContent']> = {
  achievingBuyIn?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  agendaCreator?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  preMeetingSharing?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  runningTheMeeting?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BraintreeTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['BraintreeToken'] = ResolversParentTypes['BraintreeToken']> = {
  clientToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CContent'] = ResolversParentTypes['CContent']> = {
  challenged?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dependent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['CUser'] = ResolversParentTypes['CUser']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScoredCUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloudinaryImage_FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['CloudinaryImage_File'] = ResolversParentTypes['CloudinaryImage_File']> = {
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mimetype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalFilename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicUrlTransformed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<CloudinaryImage_FilePublicUrlTransformedArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Communication'] = ResolversParentTypes['Communication']> = {
  challenged?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dependent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  intelligence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moduleContents?: Resolver<Maybe<Array<ResolversTypes['ModuleContent']>>, ParentType, ContextType, RequireFields<CommunicationModuleContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  moduleContentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<CommunicationModuleContentsCountArgs, 'where'>>;
  subhead?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenFirst?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenSecond?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenThird?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunicationContent'] = ResolversParentTypes['CommunicationContent']> = {
  addenda?: Resolver<Maybe<Array<Maybe<ResolversTypes['Addendum']>>>, ParentType, ContextType>;
  challenged?: Resolver<Maybe<Array<Maybe<ResolversTypes['CUser']>>>, ParentType, ContextType>;
  core?: Resolver<Maybe<Array<Maybe<ResolversTypes['CContent']>>>, ParentType, ContextType>;
  debug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<Array<Maybe<ResolversTypes['CUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = {
  accepted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  acceptor?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initiator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  moduleContents?: Resolver<Maybe<Array<ResolversTypes['ModuleContent']>>, ParentType, ContextType, RequireFields<ContentModuleContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  moduleContentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ContentModuleContentsCountArgs, 'where'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalNote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  range?: Resolver<Maybe<Array<ResolversTypes['Range']>>, ParentType, ContextType, RequireFields<ContentRangeArgs, 'orderBy' | 'skip' | 'where'>>;
  rangeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ContentRangeCountArgs, 'where'>>;
  sixtyChar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subContents?: Resolver<Maybe<Array<ResolversTypes['SubContent']>>, ParentType, ContextType, RequireFields<ContentSubContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  subContentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ContentSubContentsCountArgs, 'where'>>;
  twentyFiveWord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenFourth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenSecond?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenThird?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DynamicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dynamic'] = ResolversParentTypes['Dynamic']> = {
  className?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneralResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneralResponse'] = ResolversParentTypes['GeneralResponse']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  defaultVus?: Resolver<Maybe<Array<ResolversTypes['Vu']>>, ParentType, ContextType, RequireFields<GroupDefaultVusArgs, 'orderBy' | 'skip' | 'where'>>;
  defaultVusCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<GroupDefaultVusCountArgs, 'where'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<ResolversTypes['Membership']>>, ParentType, ContextType, RequireFields<GroupMembersArgs, 'orderBy' | 'skip' | 'where'>>;
  membersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<GroupMembersCountArgs, 'where'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsightResolvers<ContextType = any, ParentType extends ResolversParentTypes['Insight'] = ResolversParentTypes['Insight']> = {
  descriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diagnostic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  predictive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prescriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ranges?: Resolver<Maybe<Array<ResolversTypes['Range']>>, ParentType, ContextType, RequireFields<InsightRangesArgs, 'orderBy' | 'skip' | 'where'>>;
  rangesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<InsightRangesCountArgs, 'where'>>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invite'] = ResolversParentTypes['Invite']> = {
  accepted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  acceptor?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  declined?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailSent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initiator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  lastDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InviteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['InviteResponse'] = ResolversParentTypes['InviteResponse']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeystoneAdminMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminMeta'] = ResolversParentTypes['KeystoneAdminMeta']> = {
  enableSessionItem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSignout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  list?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType, RequireFields<KeystoneAdminMetaListArgs, 'key'>>;
  lists?: Resolver<Array<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMeta'] = ResolversParentTypes['KeystoneAdminUIFieldMeta']> = {
  createView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateView'], ParentType, ContextType>;
  customViewsIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fieldMeta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  isFilterable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOrderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemView?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemView']>, ParentType, ContextType, RequireFields<KeystoneAdminUiFieldMetaItemViewArgs, 'id'>>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListView'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['QueryMode']>, ParentType, ContextType>;
  viewsIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaItemViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaItemView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaListViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaListView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaListView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiListMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIListMeta'] = ResolversParentTypes['KeystoneAdminUIListMeta']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldMeta']>, ParentType, ContextType>;
  hideCreate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  initialColumns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  initialSort?: Resolver<Maybe<ResolversTypes['KeystoneAdminUISort']>, ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labelField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  singular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiSortResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUISort'] = ResolversParentTypes['KeystoneAdminUISort']> = {
  direction?: Resolver<ResolversTypes['KeystoneAdminUISortDirection'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneMeta'] = ResolversParentTypes['KeystoneMeta']> = {
  adminMeta?: Resolver<ResolversTypes['KeystoneAdminMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailgunResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailgunResponse'] = ResolversParentTypes['MailgunResponse']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Membership'] = ResolversParentTypes['Membership']> = {
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  insights?: Resolver<Maybe<Array<ResolversTypes['Insight']>>, ParentType, ContextType, RequireFields<ModuleInsightsArgs, 'orderBy' | 'skip' | 'where'>>;
  insightsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ModuleInsightsCountArgs, 'where'>>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  premium?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModuleContent'] = ResolversParentTypes['ModuleContent']> = {
  communication?: Resolver<Maybe<ResolversTypes['Communication']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType>;
  sixtyChar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twentyFiveWord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenFourth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenSecond?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whenThird?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acceptInvite?: Resolver<Maybe<ResolversTypes['InviteResponse']>, ParentType, ContextType, RequireFields<MutationAcceptInviteArgs, 'inviteId'>>;
  authenticateUserWithPassword?: Resolver<ResolversTypes['UserAuthenticationWithPasswordResult'], ParentType, ContextType, RequireFields<MutationAuthenticateUserWithPasswordArgs, 'email' | 'password'>>;
  completeTest?: Resolver<Maybe<ResolversTypes['GeneralResponse']>, ParentType, ContextType, RequireFields<MutationCompleteTestArgs, 'progress'>>;
  createAddenda?: Resolver<Maybe<Array<Maybe<ResolversTypes['Addendum']>>>, ParentType, ContextType, RequireFields<MutationCreateAddendaArgs, 'data'>>;
  createAddendum?: Resolver<Maybe<ResolversTypes['Addendum']>, ParentType, ContextType, RequireFields<MutationCreateAddendumArgs, 'data'>>;
  createAnswer?: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<MutationCreateAnswerArgs, 'data'>>;
  createAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<MutationCreateAnswersArgs, 'data'>>;
  createBetterMeeting?: Resolver<Maybe<ResolversTypes['BetterMeeting']>, ParentType, ContextType, RequireFields<MutationCreateBetterMeetingArgs, 'data'>>;
  createBetterMeetings?: Resolver<Maybe<Array<Maybe<ResolversTypes['BetterMeeting']>>>, ParentType, ContextType, RequireFields<MutationCreateBetterMeetingsArgs, 'data'>>;
  createCommunication?: Resolver<Maybe<ResolversTypes['Communication']>, ParentType, ContextType, RequireFields<MutationCreateCommunicationArgs, 'data'>>;
  createCommunications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Communication']>>>, ParentType, ContextType, RequireFields<MutationCreateCommunicationsArgs, 'data'>>;
  createConnection?: Resolver<Maybe<ResolversTypes['Connection']>, ParentType, ContextType, RequireFields<MutationCreateConnectionArgs, 'data'>>;
  createConnections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Connection']>>>, ParentType, ContextType, RequireFields<MutationCreateConnectionsArgs, 'data'>>;
  createContent?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<MutationCreateContentArgs, 'data'>>;
  createContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType, RequireFields<MutationCreateContentsArgs, 'data'>>;
  createGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'data'>>;
  createGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType, RequireFields<MutationCreateGroupsArgs, 'data'>>;
  createInitialUser?: Resolver<ResolversTypes['UserAuthenticationWithPasswordSuccess'], ParentType, ContextType, RequireFields<MutationCreateInitialUserArgs, 'data'>>;
  createInsight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType, RequireFields<MutationCreateInsightArgs, 'data'>>;
  createInsights?: Resolver<Maybe<Array<Maybe<ResolversTypes['Insight']>>>, ParentType, ContextType, RequireFields<MutationCreateInsightsArgs, 'data'>>;
  createInvite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<MutationCreateInviteArgs, 'data'>>;
  createInvites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Invite']>>>, ParentType, ContextType, RequireFields<MutationCreateInvitesArgs, 'data'>>;
  createMembership?: Resolver<Maybe<ResolversTypes['Membership']>, ParentType, ContextType, RequireFields<MutationCreateMembershipArgs, 'data'>>;
  createMemberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Membership']>>>, ParentType, ContextType, RequireFields<MutationCreateMembershipsArgs, 'data'>>;
  createModule?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, RequireFields<MutationCreateModuleArgs, 'data'>>;
  createModuleContent?: Resolver<Maybe<ResolversTypes['ModuleContent']>, ParentType, ContextType, RequireFields<MutationCreateModuleContentArgs, 'data'>>;
  createModuleContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModuleContent']>>>, ParentType, ContextType, RequireFields<MutationCreateModuleContentsArgs, 'data'>>;
  createModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Module']>>>, ParentType, ContextType, RequireFields<MutationCreateModulesArgs, 'data'>>;
  createPlan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationCreatePlanArgs, 'data'>>;
  createPlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType, RequireFields<MutationCreatePlansArgs, 'data'>>;
  createPolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Policy']>>>, ParentType, ContextType, RequireFields<MutationCreatePoliciesArgs, 'data'>>;
  createPolicy?: Resolver<Maybe<ResolversTypes['Policy']>, ParentType, ContextType, RequireFields<MutationCreatePolicyArgs, 'data'>>;
  createPreference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationCreatePreferenceArgs, 'data'>>;
  createPreferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Preference']>>>, ParentType, ContextType, RequireFields<MutationCreatePreferencesArgs, 'data'>>;
  createQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationCreateQuestionArgs, 'data'>>;
  createQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<MutationCreateQuestionsArgs, 'data'>>;
  createRange?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType, RequireFields<MutationCreateRangeArgs, 'data'>>;
  createRanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Range']>>>, ParentType, ContextType, RequireFields<MutationCreateRangesArgs, 'data'>>;
  createResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<MutationCreateResourceArgs, 'data'>>;
  createResources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Resource']>>>, ParentType, ContextType, RequireFields<MutationCreateResourcesArgs, 'data'>>;
  createScore?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<MutationCreateScoreArgs, 'data'>>;
  createScores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType, RequireFields<MutationCreateScoresArgs, 'data'>>;
  createSubContent?: Resolver<Maybe<ResolversTypes['SubContent']>, ParentType, ContextType, RequireFields<MutationCreateSubContentArgs, 'data'>>;
  createSubContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubContent']>>>, ParentType, ContextType, RequireFields<MutationCreateSubContentsArgs, 'data'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  createUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'data'>>;
  createVu?: Resolver<Maybe<ResolversTypes['Vu']>, ParentType, ContextType, RequireFields<MutationCreateVuArgs, 'data'>>;
  createVus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vu']>>>, ParentType, ContextType, RequireFields<MutationCreateVusArgs, 'data'>>;
  declineInvite?: Resolver<Maybe<ResolversTypes['InviteResponse']>, ParentType, ContextType, RequireFields<MutationDeclineInviteArgs, 'inviteId'>>;
  deleteAddenda?: Resolver<Maybe<Array<Maybe<ResolversTypes['Addendum']>>>, ParentType, ContextType, RequireFields<MutationDeleteAddendaArgs, 'where'>>;
  deleteAddendum?: Resolver<Maybe<ResolversTypes['Addendum']>, ParentType, ContextType, RequireFields<MutationDeleteAddendumArgs, 'where'>>;
  deleteAnswer?: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<MutationDeleteAnswerArgs, 'where'>>;
  deleteAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<MutationDeleteAnswersArgs, 'where'>>;
  deleteBetterMeeting?: Resolver<Maybe<ResolversTypes['BetterMeeting']>, ParentType, ContextType, RequireFields<MutationDeleteBetterMeetingArgs, 'where'>>;
  deleteBetterMeetings?: Resolver<Maybe<Array<Maybe<ResolversTypes['BetterMeeting']>>>, ParentType, ContextType, RequireFields<MutationDeleteBetterMeetingsArgs, 'where'>>;
  deleteCommunication?: Resolver<Maybe<ResolversTypes['Communication']>, ParentType, ContextType, RequireFields<MutationDeleteCommunicationArgs, 'where'>>;
  deleteCommunications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Communication']>>>, ParentType, ContextType, RequireFields<MutationDeleteCommunicationsArgs, 'where'>>;
  deleteConnection?: Resolver<Maybe<ResolversTypes['Connection']>, ParentType, ContextType, RequireFields<MutationDeleteConnectionArgs, 'where'>>;
  deleteConnections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Connection']>>>, ParentType, ContextType, RequireFields<MutationDeleteConnectionsArgs, 'where'>>;
  deleteContent?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<MutationDeleteContentArgs, 'where'>>;
  deleteContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType, RequireFields<MutationDeleteContentsArgs, 'where'>>;
  deleteGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'where'>>;
  deleteGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType, RequireFields<MutationDeleteGroupsArgs, 'where'>>;
  deleteInsight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType, RequireFields<MutationDeleteInsightArgs, 'where'>>;
  deleteInsights?: Resolver<Maybe<Array<Maybe<ResolversTypes['Insight']>>>, ParentType, ContextType, RequireFields<MutationDeleteInsightsArgs, 'where'>>;
  deleteInvite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<MutationDeleteInviteArgs, 'where'>>;
  deleteInvites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Invite']>>>, ParentType, ContextType, RequireFields<MutationDeleteInvitesArgs, 'where'>>;
  deleteMembership?: Resolver<Maybe<ResolversTypes['Membership']>, ParentType, ContextType, RequireFields<MutationDeleteMembershipArgs, 'where'>>;
  deleteMemberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Membership']>>>, ParentType, ContextType, RequireFields<MutationDeleteMembershipsArgs, 'where'>>;
  deleteModule?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, RequireFields<MutationDeleteModuleArgs, 'where'>>;
  deleteModuleContent?: Resolver<Maybe<ResolversTypes['ModuleContent']>, ParentType, ContextType, RequireFields<MutationDeleteModuleContentArgs, 'where'>>;
  deleteModuleContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModuleContent']>>>, ParentType, ContextType, RequireFields<MutationDeleteModuleContentsArgs, 'where'>>;
  deleteModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Module']>>>, ParentType, ContextType, RequireFields<MutationDeleteModulesArgs, 'where'>>;
  deletePlan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationDeletePlanArgs, 'where'>>;
  deletePlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType, RequireFields<MutationDeletePlansArgs, 'where'>>;
  deletePolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Policy']>>>, ParentType, ContextType, RequireFields<MutationDeletePoliciesArgs, 'where'>>;
  deletePolicy?: Resolver<Maybe<ResolversTypes['Policy']>, ParentType, ContextType, RequireFields<MutationDeletePolicyArgs, 'where'>>;
  deletePreference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationDeletePreferenceArgs, 'where'>>;
  deletePreferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Preference']>>>, ParentType, ContextType, RequireFields<MutationDeletePreferencesArgs, 'where'>>;
  deleteQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationDeleteQuestionArgs, 'where'>>;
  deleteQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<MutationDeleteQuestionsArgs, 'where'>>;
  deleteRange?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType, RequireFields<MutationDeleteRangeArgs, 'where'>>;
  deleteRanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Range']>>>, ParentType, ContextType, RequireFields<MutationDeleteRangesArgs, 'where'>>;
  deleteResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<MutationDeleteResourceArgs, 'where'>>;
  deleteResources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Resource']>>>, ParentType, ContextType, RequireFields<MutationDeleteResourcesArgs, 'where'>>;
  deleteScore?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<MutationDeleteScoreArgs, 'where'>>;
  deleteScores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType, RequireFields<MutationDeleteScoresArgs, 'where'>>;
  deleteSubContent?: Resolver<Maybe<ResolversTypes['SubContent']>, ParentType, ContextType, RequireFields<MutationDeleteSubContentArgs, 'where'>>;
  deleteSubContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubContent']>>>, ParentType, ContextType, RequireFields<MutationDeleteSubContentsArgs, 'where'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'where'>>;
  deleteUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, 'where'>>;
  deleteVu?: Resolver<Maybe<ResolversTypes['Vu']>, ParentType, ContextType, RequireFields<MutationDeleteVuArgs, 'where'>>;
  deleteVus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vu']>>>, ParentType, ContextType, RequireFields<MutationDeleteVusArgs, 'where'>>;
  endSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  newGroup?: Resolver<ResolversTypes['NewGroupResponse'], ParentType, ContextType, RequireFields<MutationNewGroupArgs, 'group'>>;
  redeemUserMagicAuthToken?: Resolver<ResolversTypes['RedeemUserMagicAuthTokenResult'], ParentType, ContextType, RequireFields<MutationRedeemUserMagicAuthTokenArgs, 'email' | 'token'>>;
  redeemUserPasswordResetToken?: Resolver<Maybe<ResolversTypes['RedeemUserPasswordResetTokenResult']>, ParentType, ContextType, RequireFields<MutationRedeemUserPasswordResetTokenArgs, 'email' | 'password' | 'token'>>;
  sendInvites?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailgunResponse']>>>, ParentType, ContextType, RequireFields<MutationSendInvitesArgs, never>>;
  sendUserMagicAuthLink?: Resolver<Maybe<ResolversTypes['SendUserMagicAuthLinkResult']>, ParentType, ContextType, RequireFields<MutationSendUserMagicAuthLinkArgs, 'email'>>;
  sendUserPasswordResetLink?: Resolver<Maybe<ResolversTypes['SendUserPasswordResetLinkResult']>, ParentType, ContextType, RequireFields<MutationSendUserPasswordResetLinkArgs, 'email'>>;
  updateAddenda?: Resolver<Maybe<Array<Maybe<ResolversTypes['Addendum']>>>, ParentType, ContextType, RequireFields<MutationUpdateAddendaArgs, 'data'>>;
  updateAddendum?: Resolver<Maybe<ResolversTypes['Addendum']>, ParentType, ContextType, RequireFields<MutationUpdateAddendumArgs, 'data' | 'where'>>;
  updateAnswer?: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<MutationUpdateAnswerArgs, 'data' | 'where'>>;
  updateAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<MutationUpdateAnswersArgs, 'data'>>;
  updateBetterMeeting?: Resolver<Maybe<ResolversTypes['BetterMeeting']>, ParentType, ContextType, RequireFields<MutationUpdateBetterMeetingArgs, 'data' | 'where'>>;
  updateBetterMeetings?: Resolver<Maybe<Array<Maybe<ResolversTypes['BetterMeeting']>>>, ParentType, ContextType, RequireFields<MutationUpdateBetterMeetingsArgs, 'data'>>;
  updateCommunication?: Resolver<Maybe<ResolversTypes['Communication']>, ParentType, ContextType, RequireFields<MutationUpdateCommunicationArgs, 'data' | 'where'>>;
  updateCommunications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Communication']>>>, ParentType, ContextType, RequireFields<MutationUpdateCommunicationsArgs, 'data'>>;
  updateConnection?: Resolver<Maybe<ResolversTypes['Connection']>, ParentType, ContextType, RequireFields<MutationUpdateConnectionArgs, 'data' | 'where'>>;
  updateConnections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Connection']>>>, ParentType, ContextType, RequireFields<MutationUpdateConnectionsArgs, 'data'>>;
  updateContent?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<MutationUpdateContentArgs, 'data' | 'where'>>;
  updateContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType, RequireFields<MutationUpdateContentsArgs, 'data'>>;
  updateGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'data' | 'where'>>;
  updateGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType, RequireFields<MutationUpdateGroupsArgs, 'data'>>;
  updateInsight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType, RequireFields<MutationUpdateInsightArgs, 'data' | 'where'>>;
  updateInsights?: Resolver<Maybe<Array<Maybe<ResolversTypes['Insight']>>>, ParentType, ContextType, RequireFields<MutationUpdateInsightsArgs, 'data'>>;
  updateInvite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<MutationUpdateInviteArgs, 'data' | 'where'>>;
  updateInvites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Invite']>>>, ParentType, ContextType, RequireFields<MutationUpdateInvitesArgs, 'data'>>;
  updateMembership?: Resolver<Maybe<ResolversTypes['Membership']>, ParentType, ContextType, RequireFields<MutationUpdateMembershipArgs, 'data' | 'where'>>;
  updateMemberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Membership']>>>, ParentType, ContextType, RequireFields<MutationUpdateMembershipsArgs, 'data'>>;
  updateModule?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, RequireFields<MutationUpdateModuleArgs, 'data' | 'where'>>;
  updateModuleContent?: Resolver<Maybe<ResolversTypes['ModuleContent']>, ParentType, ContextType, RequireFields<MutationUpdateModuleContentArgs, 'data' | 'where'>>;
  updateModuleContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModuleContent']>>>, ParentType, ContextType, RequireFields<MutationUpdateModuleContentsArgs, 'data'>>;
  updateModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Module']>>>, ParentType, ContextType, RequireFields<MutationUpdateModulesArgs, 'data'>>;
  updatePlan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<MutationUpdatePlanArgs, 'data' | 'where'>>;
  updatePlans?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plan']>>>, ParentType, ContextType, RequireFields<MutationUpdatePlansArgs, 'data'>>;
  updatePolicies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Policy']>>>, ParentType, ContextType, RequireFields<MutationUpdatePoliciesArgs, 'data'>>;
  updatePolicy?: Resolver<Maybe<ResolversTypes['Policy']>, ParentType, ContextType, RequireFields<MutationUpdatePolicyArgs, 'data' | 'where'>>;
  updatePreference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<MutationUpdatePreferenceArgs, 'data' | 'where'>>;
  updatePreferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['Preference']>>>, ParentType, ContextType, RequireFields<MutationUpdatePreferencesArgs, 'data'>>;
  updateQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationUpdateQuestionArgs, 'data' | 'where'>>;
  updateQuestions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<MutationUpdateQuestionsArgs, 'data'>>;
  updateRange?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType, RequireFields<MutationUpdateRangeArgs, 'data' | 'where'>>;
  updateRanges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Range']>>>, ParentType, ContextType, RequireFields<MutationUpdateRangesArgs, 'data'>>;
  updateResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<MutationUpdateResourceArgs, 'data' | 'where'>>;
  updateResources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Resource']>>>, ParentType, ContextType, RequireFields<MutationUpdateResourcesArgs, 'data'>>;
  updateScore?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<MutationUpdateScoreArgs, 'data' | 'where'>>;
  updateScores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType, RequireFields<MutationUpdateScoresArgs, 'data'>>;
  updateSubContent?: Resolver<Maybe<ResolversTypes['SubContent']>, ParentType, ContextType, RequireFields<MutationUpdateSubContentArgs, 'data' | 'where'>>;
  updateSubContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubContent']>>>, ParentType, ContextType, RequireFields<MutationUpdateSubContentsArgs, 'data'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
  updateUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, 'data'>>;
  updateVu?: Resolver<Maybe<ResolversTypes['Vu']>, ParentType, ContextType, RequireFields<MutationUpdateVuArgs, 'data' | 'where'>>;
  updateVus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Vu']>>>, ParentType, ContextType, RequireFields<MutationUpdateVusArgs, 'data'>>;
  userIntake?: Resolver<Maybe<ResolversTypes['UserAuthenticationWithPasswordResult']>, ParentType, ContextType, RequireFields<MutationUserIntakeArgs, 'inviteId' | 'referrer' | 'user'>>;
};

export type NewGroupResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NewGroupResponse'] = ResolversParentTypes['NewGroupResponse']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordState'] = ResolversParentTypes['PasswordState']> = {
  isSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxSeats?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modules?: Resolver<Maybe<Array<ResolversTypes['Module']>>, ParentType, ContextType, RequireFields<PlanModulesArgs, 'orderBy' | 'skip' | 'where'>>;
  modulesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<PlanModulesCountArgs, 'where'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Policy'] = ResolversParentTypes['Policy']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes['Policy_policy_DocumentField']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Policy_Policy_DocumentFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Policy_policy_DocumentField'] = ResolversParentTypes['Policy_policy_DocumentField']> = {
  document?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<Policy_Policy_DocumentFieldDocumentArgs, 'hydrateRelationships'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preference'] = ResolversParentTypes['Preference']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  addenda?: Resolver<Maybe<Array<ResolversTypes['Addendum']>>, ParentType, ContextType, RequireFields<QueryAddendaArgs, 'orderBy' | 'skip' | 'where'>>;
  addendaCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAddendaCountArgs, 'where'>>;
  addendum?: Resolver<Maybe<ResolversTypes['Addendum']>, ParentType, ContextType, RequireFields<QueryAddendumArgs, 'where'>>;
  answer?: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryAnswerArgs, 'where'>>;
  answers?: Resolver<Maybe<Array<ResolversTypes['Answer']>>, ParentType, ContextType, RequireFields<QueryAnswersArgs, 'orderBy' | 'skip' | 'where'>>;
  answersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAnswersCountArgs, 'where'>>;
  authenticatedItem?: Resolver<Maybe<ResolversTypes['AuthenticatedItem']>, ParentType, ContextType>;
  betterMeeting?: Resolver<Maybe<ResolversTypes['BetterMeeting']>, ParentType, ContextType, RequireFields<QueryBetterMeetingArgs, 'where'>>;
  betterMeetings?: Resolver<Maybe<Array<ResolversTypes['BetterMeeting']>>, ParentType, ContextType, RequireFields<QueryBetterMeetingsArgs, 'orderBy' | 'skip' | 'where'>>;
  betterMeetingsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryBetterMeetingsCountArgs, 'where'>>;
  communication?: Resolver<Maybe<ResolversTypes['Communication']>, ParentType, ContextType, RequireFields<QueryCommunicationArgs, 'where'>>;
  communicationContent?: Resolver<Maybe<ResolversTypes['CommunicationContent']>, ParentType, ContextType, RequireFields<QueryCommunicationContentArgs, 'ids'>>;
  communications?: Resolver<Maybe<Array<ResolversTypes['Communication']>>, ParentType, ContextType, RequireFields<QueryCommunicationsArgs, 'orderBy' | 'skip' | 'where'>>;
  communicationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryCommunicationsCountArgs, 'where'>>;
  connection?: Resolver<Maybe<ResolversTypes['Connection']>, ParentType, ContextType, RequireFields<QueryConnectionArgs, 'where'>>;
  connections?: Resolver<Maybe<Array<ResolversTypes['Connection']>>, ParentType, ContextType, RequireFields<QueryConnectionsArgs, 'orderBy' | 'skip' | 'where'>>;
  connectionsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryConnectionsCountArgs, 'where'>>;
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<QueryContentArgs, 'where'>>;
  contents?: Resolver<Maybe<Array<ResolversTypes['Content']>>, ParentType, ContextType, RequireFields<QueryContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  contentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryContentsCountArgs, 'where'>>;
  getBetterMeetings?: Resolver<Maybe<ResolversTypes['BetterMeetingsContent']>, ParentType, ContextType, RequireFields<QueryGetBetterMeetingsArgs, 'emails' | 'group'>>;
  getBraintreeToken?: Resolver<Maybe<ResolversTypes['BraintreeToken']>, ParentType, ContextType>;
  getVu?: Resolver<Maybe<ResolversTypes['Vu']>, ParentType, ContextType, RequireFields<QueryGetVuArgs, 'ids'>>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupArgs, 'where'>>;
  groups?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType, RequireFields<QueryGroupsArgs, 'orderBy' | 'skip' | 'where'>>;
  groupsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryGroupsCountArgs, 'where'>>;
  insight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType, RequireFields<QueryInsightArgs, 'where'>>;
  insights?: Resolver<Maybe<Array<ResolversTypes['Insight']>>, ParentType, ContextType, RequireFields<QueryInsightsArgs, 'orderBy' | 'skip' | 'where'>>;
  insightsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryInsightsCountArgs, 'where'>>;
  invite?: Resolver<Maybe<ResolversTypes['Invite']>, ParentType, ContextType, RequireFields<QueryInviteArgs, 'where'>>;
  invites?: Resolver<Maybe<Array<ResolversTypes['Invite']>>, ParentType, ContextType, RequireFields<QueryInvitesArgs, 'orderBy' | 'skip' | 'where'>>;
  invitesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryInvitesCountArgs, 'where'>>;
  keystone?: Resolver<ResolversTypes['KeystoneMeta'], ParentType, ContextType>;
  membership?: Resolver<Maybe<ResolversTypes['Membership']>, ParentType, ContextType, RequireFields<QueryMembershipArgs, 'where'>>;
  memberships?: Resolver<Maybe<Array<ResolversTypes['Membership']>>, ParentType, ContextType, RequireFields<QueryMembershipsArgs, 'orderBy' | 'skip' | 'where'>>;
  membershipsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryMembershipsCountArgs, 'where'>>;
  module?: Resolver<Maybe<ResolversTypes['Module']>, ParentType, ContextType, RequireFields<QueryModuleArgs, 'where'>>;
  moduleContent?: Resolver<Maybe<ResolversTypes['ModuleContent']>, ParentType, ContextType, RequireFields<QueryModuleContentArgs, 'where'>>;
  moduleContents?: Resolver<Maybe<Array<ResolversTypes['ModuleContent']>>, ParentType, ContextType, RequireFields<QueryModuleContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  moduleContentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryModuleContentsCountArgs, 'where'>>;
  modules?: Resolver<Maybe<Array<ResolversTypes['Module']>>, ParentType, ContextType, RequireFields<QueryModulesArgs, 'orderBy' | 'skip' | 'where'>>;
  modulesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryModulesCountArgs, 'where'>>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<QueryPlanArgs, 'where'>>;
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, RequireFields<QueryPlansArgs, 'orderBy' | 'skip' | 'where'>>;
  plansCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryPlansCountArgs, 'where'>>;
  policies?: Resolver<Maybe<Array<ResolversTypes['Policy']>>, ParentType, ContextType, RequireFields<QueryPoliciesArgs, 'orderBy' | 'skip' | 'where'>>;
  policiesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryPoliciesCountArgs, 'where'>>;
  policy?: Resolver<Maybe<ResolversTypes['Policy']>, ParentType, ContextType, RequireFields<QueryPolicyArgs, 'where'>>;
  preference?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType, RequireFields<QueryPreferenceArgs, 'where'>>;
  preferences?: Resolver<Maybe<Array<ResolversTypes['Preference']>>, ParentType, ContextType, RequireFields<QueryPreferencesArgs, 'orderBy' | 'skip' | 'where'>>;
  preferencesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryPreferencesCountArgs, 'where'>>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryQuestionArgs, 'where'>>;
  questions?: Resolver<Maybe<Array<ResolversTypes['Question']>>, ParentType, ContextType, RequireFields<QueryQuestionsArgs, 'orderBy' | 'skip' | 'where'>>;
  questionsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryQuestionsCountArgs, 'where'>>;
  range?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType, RequireFields<QueryRangeArgs, 'where'>>;
  ranges?: Resolver<Maybe<Array<ResolversTypes['Range']>>, ParentType, ContextType, RequireFields<QueryRangesArgs, 'orderBy' | 'skip' | 'where'>>;
  rangesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryRangesCountArgs, 'where'>>;
  resource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<QueryResourceArgs, 'where'>>;
  resources?: Resolver<Maybe<Array<ResolversTypes['Resource']>>, ParentType, ContextType, RequireFields<QueryResourcesArgs, 'orderBy' | 'skip' | 'where'>>;
  resourcesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryResourcesCountArgs, 'where'>>;
  score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType, RequireFields<QueryScoreArgs, 'where'>>;
  scores?: Resolver<Maybe<Array<ResolversTypes['Score']>>, ParentType, ContextType, RequireFields<QueryScoresArgs, 'orderBy' | 'skip' | 'where'>>;
  scoresCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryScoresCountArgs, 'where'>>;
  subContent?: Resolver<Maybe<ResolversTypes['SubContent']>, ParentType, ContextType, RequireFields<QuerySubContentArgs, 'where'>>;
  subContents?: Resolver<Maybe<Array<ResolversTypes['SubContent']>>, ParentType, ContextType, RequireFields<QuerySubContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  subContentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QuerySubContentsCountArgs, 'where'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'orderBy' | 'skip' | 'where'>>;
  usersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryUsersCountArgs, 'where'>>;
  validateUserPasswordResetToken?: Resolver<Maybe<ResolversTypes['ValidateUserPasswordResetTokenResult']>, ParentType, ContextType, RequireFields<QueryValidateUserPasswordResetTokenArgs, 'email' | 'token'>>;
  vu?: Resolver<Maybe<ResolversTypes['Vu']>, ParentType, ContextType, RequireFields<QueryVuArgs, 'where'>>;
  vus?: Resolver<Maybe<Array<ResolversTypes['Vu']>>, ParentType, ContextType, RequireFields<QueryVusArgs, 'orderBy' | 'skip' | 'where'>>;
  vusCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryVusCountArgs, 'where'>>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  answers?: Resolver<Maybe<Array<ResolversTypes['Answer']>>, ParentType, ContextType, RequireFields<QuestionAnswersArgs, 'orderBy' | 'skip' | 'where'>>;
  answersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QuestionAnswersCountArgs, 'where'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Range'] = ResolversParentTypes['Range']> = {
  className?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contents?: Resolver<Maybe<Array<ResolversTypes['Content']>>, ParentType, ContextType, RequireFields<RangeContentsArgs, 'orderBy' | 'skip' | 'where'>>;
  contentsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<RangeContentsCountArgs, 'where'>>;
  expanded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['Insight']>, ParentType, ContextType>;
  logic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedeemUserMagicAuthTokenFailureResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemUserMagicAuthTokenFailure'] = ResolversParentTypes['RedeemUserMagicAuthTokenFailure']> = {
  code?: Resolver<ResolversTypes['MagicLinkRedemptionErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedeemUserMagicAuthTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemUserMagicAuthTokenResult'] = ResolversParentTypes['RedeemUserMagicAuthTokenResult']> = {
  __resolveType: TypeResolveFn<'RedeemUserMagicAuthTokenFailure' | 'RedeemUserMagicAuthTokenSuccess', ParentType, ContextType>;
};

export type RedeemUserMagicAuthTokenSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemUserMagicAuthTokenSuccess'] = ResolversParentTypes['RedeemUserMagicAuthTokenSuccess']> = {
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedeemUserPasswordResetTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemUserPasswordResetTokenResult'] = ResolversParentTypes['RedeemUserPasswordResetTokenResult']> = {
  code?: Resolver<ResolversTypes['PasswordResetRedemptionErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  content?: Resolver<Maybe<ResolversTypes['Resource_content_DocumentField']>, ParentType, ContextType>;
  hide?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resource_Content_DocumentFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource_content_DocumentField'] = ResolversParentTypes['Resource_content_DocumentField']> = {
  document?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<Resource_Content_DocumentFieldDocumentArgs, 'hydrateRelationships'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Score'] = ResolversParentTypes['Score']> = {
  agreeableness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  approach?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bodilyKinesthetic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  communication?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confidence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conscientiousness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consistency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extraversion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  flexibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  focus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fun?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  interpersonal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  intrapersonal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mathLogic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  multitasking?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  musical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neuroticism?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perspectives?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recognition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spatial?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  verbalLinguistic?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScoredCUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScoredCUser'] = ResolversParentTypes['ScoredCUser']> = {
  class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendUserMagicAuthLinkResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendUserMagicAuthLinkResult'] = ResolversParentTypes['SendUserMagicAuthLinkResult']> = {
  code?: Resolver<ResolversTypes['MagicLinkRequestErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SendUserPasswordResetLinkResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendUserPasswordResetLinkResult'] = ResolversParentTypes['SendUserPasswordResetLinkResult']> = {
  code?: Resolver<ResolversTypes['PasswordResetRequestErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubContent'] = ResolversParentTypes['SubContent']> = {
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>;
  fourth?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logic?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType>;
  subheadDescriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subheadDiagnostic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subheadPredictive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subheadPrescriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summaryDescriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summaryDiagnostic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summaryPredictive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summaryPrescriptive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  third?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  connectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  connections?: Resolver<Maybe<ResolversTypes['UserConnections']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dominantTraits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eula?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasScore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invites?: Resolver<Maybe<Array<ResolversTypes['Invite']>>, ParentType, ContextType, RequireFields<UserInvitesArgs, 'orderBy' | 'skip' | 'where'>>;
  invitesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserInvitesCountArgs, 'where'>>;
  last?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magicAuthIssuedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magicAuthRedeemedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  magicAuthToken?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  memberships?: Resolver<Maybe<Array<ResolversTypes['Membership']>>, ParentType, ContextType, RequireFields<UserMembershipsArgs, 'orderBy' | 'skip' | 'where'>>;
  membershipsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserMembershipsCountArgs, 'where'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  passwordResetIssuedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordResetRedeemedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordResetToken?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferences?: Resolver<Maybe<ResolversTypes['Preference']>, ParentType, ContextType>;
  privacy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profilePicture?: Resolver<Maybe<ResolversTypes['CloudinaryImage_File']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<Array<ResolversTypes['Invite']>>, ParentType, ContextType, RequireFields<UserRequestsArgs, 'orderBy' | 'skip' | 'where'>>;
  requestsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserRequestsCountArgs, 'where'>>;
  score?: Resolver<Maybe<ResolversTypes['Score']>, ParentType, ContextType>;
  superAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vus?: Resolver<Maybe<Array<ResolversTypes['Vu']>>, ParentType, ContextType, RequireFields<UserVusArgs, 'orderBy' | 'skip' | 'where'>>;
  vusCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<UserVusCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordFailureResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordFailure'] = ResolversParentTypes['UserAuthenticationWithPasswordFailure']> = {
  code?: Resolver<ResolversTypes['PasswordAuthErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordResult'] = ResolversParentTypes['UserAuthenticationWithPasswordResult']> = {
  __resolveType: TypeResolveFn<'UserAuthenticationWithPasswordFailure' | 'UserAuthenticationWithPasswordSuccess', ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] = ResolversParentTypes['UserAuthenticationWithPasswordSuccess']> = {
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnections'] = ResolversParentTypes['UserConnections']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidateUserPasswordResetTokenResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidateUserPasswordResetTokenResult'] = ResolversParentTypes['ValidateUserPasswordResetTokenResult']> = {
  code?: Resolver<ResolversTypes['PasswordResetRedemptionErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VuResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vu'] = ResolversParentTypes['Vu']> = {
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Content']>>>, ParentType, ContextType>;
  debug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dynamics?: Resolver<Maybe<Array<Maybe<ResolversTypes['VuDynamic']>>>, ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  insights?: Resolver<Maybe<Array<Maybe<ResolversTypes['Insight']>>>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<VuMembersArgs, 'orderBy' | 'skip' | 'where'>>;
  membersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<VuMembersCountArgs, 'where'>>;
  modules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Module']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ranges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Range']>>>, ParentType, ContextType>;
  scores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Score']>>>, ParentType, ContextType>;
  subContents?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubContent']>>>, ParentType, ContextType>;
  unscoredUsersPresent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VuDynamicResolvers<ContextType = any, ParentType extends ResolversParentTypes['VuDynamic'] = ResolversParentTypes['VuDynamic']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ranges?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dynamic']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Addendum?: AddendumResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  AuthenticatedItem?: AuthenticatedItemResolvers<ContextType>;
  BetterMeeting?: BetterMeetingResolvers<ContextType>;
  BetterMeetingsContent?: BetterMeetingsContentResolvers<ContextType>;
  BraintreeToken?: BraintreeTokenResolvers<ContextType>;
  CContent?: CContentResolvers<ContextType>;
  CUser?: CUserResolvers<ContextType>;
  CloudinaryImage_File?: CloudinaryImage_FileResolvers<ContextType>;
  Communication?: CommunicationResolvers<ContextType>;
  CommunicationContent?: CommunicationContentResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  Dynamic?: DynamicResolvers<ContextType>;
  GeneralResponse?: GeneralResponseResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  Insight?: InsightResolvers<ContextType>;
  Invite?: InviteResolvers<ContextType>;
  InviteResponse?: InviteResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KeystoneAdminMeta?: KeystoneAdminMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMeta?: KeystoneAdminUiFieldMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMetaCreateView?: KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaItemView?: KeystoneAdminUiFieldMetaItemViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaListView?: KeystoneAdminUiFieldMetaListViewResolvers<ContextType>;
  KeystoneAdminUIListMeta?: KeystoneAdminUiListMetaResolvers<ContextType>;
  KeystoneAdminUISort?: KeystoneAdminUiSortResolvers<ContextType>;
  KeystoneMeta?: KeystoneMetaResolvers<ContextType>;
  MailgunResponse?: MailgunResponseResolvers<ContextType>;
  Membership?: MembershipResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  ModuleContent?: ModuleContentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NewGroupResponse?: NewGroupResponseResolvers<ContextType>;
  PasswordState?: PasswordStateResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  Policy?: PolicyResolvers<ContextType>;
  Policy_policy_DocumentField?: Policy_Policy_DocumentFieldResolvers<ContextType>;
  Preference?: PreferenceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Range?: RangeResolvers<ContextType>;
  RedeemUserMagicAuthTokenFailure?: RedeemUserMagicAuthTokenFailureResolvers<ContextType>;
  RedeemUserMagicAuthTokenResult?: RedeemUserMagicAuthTokenResultResolvers<ContextType>;
  RedeemUserMagicAuthTokenSuccess?: RedeemUserMagicAuthTokenSuccessResolvers<ContextType>;
  RedeemUserPasswordResetTokenResult?: RedeemUserPasswordResetTokenResultResolvers<ContextType>;
  Resource?: ResourceResolvers<ContextType>;
  Resource_content_DocumentField?: Resource_Content_DocumentFieldResolvers<ContextType>;
  Score?: ScoreResolvers<ContextType>;
  ScoredCUser?: ScoredCUserResolvers<ContextType>;
  SendUserMagicAuthLinkResult?: SendUserMagicAuthLinkResultResolvers<ContextType>;
  SendUserPasswordResetLinkResult?: SendUserPasswordResetLinkResultResolvers<ContextType>;
  SubContent?: SubContentResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAuthenticationWithPasswordFailure?: UserAuthenticationWithPasswordFailureResolvers<ContextType>;
  UserAuthenticationWithPasswordResult?: UserAuthenticationWithPasswordResultResolvers<ContextType>;
  UserAuthenticationWithPasswordSuccess?: UserAuthenticationWithPasswordSuccessResolvers<ContextType>;
  UserConnections?: UserConnectionsResolvers<ContextType>;
  ValidateUserPasswordResetTokenResult?: ValidateUserPasswordResetTokenResultResolvers<ContextType>;
  Vu?: VuResolvers<ContextType>;
  VuDynamic?: VuDynamicResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const CommunicationContentDocument = gql`
    query CommunicationContent($ids: [ID]!, $slug: String) {
  communicationContent(ids: $ids, slug: $slug) {
    order {
      name
      count
      users {
        id
        class
      }
    }
    core {
      key
      label
      content
      challenged
      dependent
    }
    addenda {
      intelligence
      intelligenceRange
      rank
      subhead
      content
    }
    challenged {
      name
      count
      users {
        id
        class
      }
    }
    debug
  }
}
    `;

/**
 * __useCommunicationContentQuery__
 *
 * To run a query within a React component, call `useCommunicationContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunicationContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunicationContentQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCommunicationContentQuery(baseOptions: Apollo.QueryHookOptions<CommunicationContentQuery, CommunicationContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommunicationContentQuery, CommunicationContentQueryVariables>(CommunicationContentDocument, options);
      }
export function useCommunicationContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommunicationContentQuery, CommunicationContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommunicationContentQuery, CommunicationContentQueryVariables>(CommunicationContentDocument, options);
        }
export type CommunicationContentQueryHookResult = ReturnType<typeof useCommunicationContentQuery>;
export type CommunicationContentLazyQueryHookResult = ReturnType<typeof useCommunicationContentLazyQuery>;
export type CommunicationContentQueryResult = Apollo.QueryResult<CommunicationContentQuery, CommunicationContentQueryVariables>;
export const MyConnectionsDocument = gql`
    query MyConnections {
  authenticatedItem {
    __typename
    ... on User {
      id
      connections {
        count
        users {
          id
          name
          email
          first
          profilePicture {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMyConnectionsQuery__
 *
 * To run a query within a React component, call `useMyConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyConnectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyConnectionsQuery(baseOptions?: Apollo.QueryHookOptions<MyConnectionsQuery, MyConnectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyConnectionsQuery, MyConnectionsQueryVariables>(MyConnectionsDocument, options);
      }
export function useMyConnectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyConnectionsQuery, MyConnectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyConnectionsQuery, MyConnectionsQueryVariables>(MyConnectionsDocument, options);
        }
export type MyConnectionsQueryHookResult = ReturnType<typeof useMyConnectionsQuery>;
export type MyConnectionsLazyQueryHookResult = ReturnType<typeof useMyConnectionsLazyQuery>;
export type MyConnectionsQueryResult = Apollo.QueryResult<MyConnectionsQuery, MyConnectionsQueryVariables>;
export const GetVuDocument = gql`
    query GetVu($ids: [ID]!, $group: String) {
  getVu(ids: $ids, group: $group) {
    unscoredUsersPresent
    content {
      id
      contentType
      sixtyChar
      twentyFiveWord
      personalNote
      insight
      range {
        className
        insight {
          name
        }
      }
      subContents {
        id
      }
      whenSecond
      whenThird
      whenFourth
      moduleContents {
        module {
          key
        }
        sixtyChar
        twentyFiveWord
        whenSecond
        whenThird
        whenFourth
      }
    }
    dynamics {
      name
      ranges {
        className
        users {
          id
          name
        }
        count
      }
    }
  }
  communicationContent(ids: $ids, slug: $group) {
    order {
      name
      count
      users {
        id
        class
      }
    }
    core {
      key
      label
      content
      challenged
      dependent
    }
    addenda {
      intelligence
      intelligenceRange
      rank
      subhead
      content
    }
    challenged {
      name
      count
      users {
        id
        class
      }
    }
    debug
  }
}
    `;

/**
 * __useGetVuQuery__
 *
 * To run a query within a React component, call `useGetVuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVuQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *      group: // value for 'group'
 *   },
 * });
 */
export function useGetVuQuery(baseOptions: Apollo.QueryHookOptions<GetVuQuery, GetVuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVuQuery, GetVuQueryVariables>(GetVuDocument, options);
      }
export function useGetVuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVuQuery, GetVuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVuQuery, GetVuQueryVariables>(GetVuDocument, options);
        }
export type GetVuQueryHookResult = ReturnType<typeof useGetVuQuery>;
export type GetVuLazyQueryHookResult = ReturnType<typeof useGetVuLazyQuery>;
export type GetVuQueryResult = Apollo.QueryResult<GetVuQuery, GetVuQueryVariables>;
export const GlobalsDocument = gql`
    query Globals {
  resources {
    __typename
    slug
    title
    hide
  }
  insights {
    name
    priority
    summary
    descriptive
    diagnostic
    predictive
    prescriptive
    ranges {
      className
      heading
      expanded
    }
  }
  modules {
    name
    key
    description
    priority
    type
    insights {
      name
    }
    image {
      publicUrlTransformed
    }
  }
}
    `;

/**
 * __useGlobalsQuery__
 *
 * To run a query within a React component, call `useGlobalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalsQuery(baseOptions?: Apollo.QueryHookOptions<GlobalsQuery, GlobalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalsQuery, GlobalsQueryVariables>(GlobalsDocument, options);
      }
export function useGlobalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalsQuery, GlobalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalsQuery, GlobalsQueryVariables>(GlobalsDocument, options);
        }
export type GlobalsQueryHookResult = ReturnType<typeof useGlobalsQuery>;
export type GlobalsLazyQueryHookResult = ReturnType<typeof useGlobalsLazyQuery>;
export type GlobalsQueryResult = Apollo.QueryResult<GlobalsQuery, GlobalsQueryVariables>;
export const GetGroupInfoDocument = gql`
    query GetGroupInfo($slug: String!) {
  authenticatedItem {
    __typename
    ... on User {
      id
      memberships(where: {group: {slug: {equals: $slug}}}) {
        id
        group {
          name
          slug
          image {
            filename
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
          members {
            id
            role
            user {
              id
              first
              name
              email
              hasScore
              dominantTraits
              profilePicture {
                filename
                publicUrlTransformed(transformation: {width: "120", crop: "limit"})
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetGroupInfoQuery__
 *
 * To run a query within a React component, call `useGetGroupInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupInfoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetGroupInfoQuery(baseOptions: Apollo.QueryHookOptions<GetGroupInfoQuery, GetGroupInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupInfoQuery, GetGroupInfoQueryVariables>(GetGroupInfoDocument, options);
      }
export function useGetGroupInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupInfoQuery, GetGroupInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupInfoQuery, GetGroupInfoQueryVariables>(GetGroupInfoDocument, options);
        }
export type GetGroupInfoQueryHookResult = ReturnType<typeof useGetGroupInfoQuery>;
export type GetGroupInfoLazyQueryHookResult = ReturnType<typeof useGetGroupInfoLazyQuery>;
export type GetGroupInfoQueryResult = Apollo.QueryResult<GetGroupInfoQuery, GetGroupInfoQueryVariables>;
export const GetUserInvitesDocument = gql`
    query GetUserInvites {
  authenticatedItem {
    __typename
    ... on User {
      id
      invites(where: {accepted: {equals: null}}) {
        id
        created
        emailSent
        acceptor {
          id
          name
          profilePicture {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
        email
        group {
          name
          slug
          image {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
      requests(where: {accepted: {equals: null}}) {
        id
        created
        initiator {
          id
          name
          profilePicture {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
        group {
          name
          slug
          image {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserInvitesQuery__
 *
 * To run a query within a React component, call `useGetUserInvitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInvitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInvitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInvitesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInvitesQuery, GetUserInvitesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInvitesQuery, GetUserInvitesQueryVariables>(GetUserInvitesDocument, options);
      }
export function useGetUserInvitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInvitesQuery, GetUserInvitesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInvitesQuery, GetUserInvitesQueryVariables>(GetUserInvitesDocument, options);
        }
export type GetUserInvitesQueryHookResult = ReturnType<typeof useGetUserInvitesQuery>;
export type GetUserInvitesLazyQueryHookResult = ReturnType<typeof useGetUserInvitesLazyQuery>;
export type GetUserInvitesQueryResult = Apollo.QueryResult<GetUserInvitesQuery, GetUserInvitesQueryVariables>;
export const SendInvitesDocument = gql`
    mutation SendInvites($emails: [String], $groupId: String, $ids: [ID]) {
  sendInvites(emails: $emails, groupId: $groupId, ids: $ids) {
    message
    id
    email
  }
}
    `;
export type SendInvitesMutationFn = Apollo.MutationFunction<SendInvitesMutation, SendInvitesMutationVariables>;

/**
 * __useSendInvitesMutation__
 *
 * To run a mutation, you first call `useSendInvitesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInvitesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInvitesMutation, { data, loading, error }] = useSendInvitesMutation({
 *   variables: {
 *      emails: // value for 'emails'
 *      groupId: // value for 'groupId'
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useSendInvitesMutation(baseOptions?: Apollo.MutationHookOptions<SendInvitesMutation, SendInvitesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendInvitesMutation, SendInvitesMutationVariables>(SendInvitesDocument, options);
      }
export type SendInvitesMutationHookResult = ReturnType<typeof useSendInvitesMutation>;
export type SendInvitesMutationResult = Apollo.MutationResult<SendInvitesMutation>;
export type SendInvitesMutationOptions = Apollo.BaseMutationOptions<SendInvitesMutation, SendInvitesMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($id: ID!) {
  user(where: {id: $id}) {
    id
    name
    first
    email
    profilePicture {
      publicUrlTransformed(transformation: {width: "120", crop: "limit"})
    }
    dominantTraits
    connections {
      count
      users {
        name
        first
        profilePicture {
          publicUrlTransformed(transformation: {width: "120", crop: "limit"})
        }
      }
    }
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const RecentActivityDocument = gql`
    query RecentActivity($date: String!) {
  authenticatedItem {
    __typename
    ... on User {
      id
      invites(
        where: {AND: [{OR: [{created: {gte: $date}}, {accepted: {gte: $date}}]}, {declined: {equals: null}}]}
        take: 5
      ) {
        id
        created
        accepted
        email
        emailSent
        lastDate
        acceptor {
          id
          name
          profilePicture {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
        group {
          name
          slug
          image {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
      requests(
        where: {AND: [{OR: [{created: {gte: $date}}, {accepted: {gte: $date}}]}, {declined: {equals: null}}]}
        take: 5
      ) {
        id
        created
        accepted
        lastDate
        initiator {
          id
          name
          profilePicture {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
        group {
          name
          slug
          image {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRecentActivityQuery__
 *
 * To run a query within a React component, call `useRecentActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentActivityQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useRecentActivityQuery(baseOptions: Apollo.QueryHookOptions<RecentActivityQuery, RecentActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentActivityQuery, RecentActivityQueryVariables>(RecentActivityDocument, options);
      }
export function useRecentActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentActivityQuery, RecentActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentActivityQuery, RecentActivityQueryVariables>(RecentActivityDocument, options);
        }
export type RecentActivityQueryHookResult = ReturnType<typeof useRecentActivityQuery>;
export type RecentActivityLazyQueryHookResult = ReturnType<typeof useRecentActivityLazyQuery>;
export type RecentActivityQueryResult = Apollo.QueryResult<RecentActivityQuery, RecentActivityQueryVariables>;
export const SubContentsDocument = gql`
    query SubContents($ids: [ID!]) {
  subContents(where: {id: {in: $ids}}) {
    subheadDescriptive
    summaryDescriptive
    subheadDiagnostic
    summaryDiagnostic
    subheadPredictive
    summaryPredictive
    subheadPrescriptive
    summaryPrescriptive
    second {
      className
    }
    third {
      className
    }
    fourth {
      className
    }
  }
}
    `;

/**
 * __useSubContentsQuery__
 *
 * To run a query within a React component, call `useSubContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubContentsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useSubContentsQuery(baseOptions?: Apollo.QueryHookOptions<SubContentsQuery, SubContentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubContentsQuery, SubContentsQueryVariables>(SubContentsDocument, options);
      }
export function useSubContentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubContentsQuery, SubContentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubContentsQuery, SubContentsQueryVariables>(SubContentsDocument, options);
        }
export type SubContentsQueryHookResult = ReturnType<typeof useSubContentsQuery>;
export type SubContentsLazyQueryHookResult = ReturnType<typeof useSubContentsLazyQuery>;
export type SubContentsQueryResult = Apollo.QueryResult<SubContentsQuery, SubContentsQueryVariables>;
export const UserInfoDocument = gql`
    query UserInfo {
  authenticatedItem {
    __typename
    ... on User {
      id
      name
      email
      first
      profilePicture {
        publicUrlTransformed(transformation: {width: "120", crop: "limit"})
      }
      dominantTraits
      memberships {
        role
        group {
          name
          slug
          type
          image {
            publicUrlTransformed(transformation: {width: "120", crop: "limit"})
          }
        }
      }
      connections {
        count
      }
      score {
        communication
        approach
        consistency
        perspectives
        confidence
        flexibility
        focus
        fun
        multitasking
        recognition
        decision
      }
    }
  }
}
    `;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
      }
export function useUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, options);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = Apollo.QueryResult<UserInfoQuery, UserInfoQueryVariables>;
export const UserCheckDocument = gql`
    query UserCheck {
  authenticatedItem {
    __typename
    ... on User {
      id
    }
  }
}
    `;

/**
 * __useUserCheckQuery__
 *
 * To run a query within a React component, call `useUserCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCheckQuery(baseOptions?: Apollo.QueryHookOptions<UserCheckQuery, UserCheckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCheckQuery, UserCheckQueryVariables>(UserCheckDocument, options);
      }
export function useUserCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCheckQuery, UserCheckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCheckQuery, UserCheckQueryVariables>(UserCheckDocument, options);
        }
export type UserCheckQueryHookResult = ReturnType<typeof useUserCheckQuery>;
export type UserCheckLazyQueryHookResult = ReturnType<typeof useUserCheckLazyQuery>;
export type UserCheckQueryResult = Apollo.QueryResult<UserCheckQuery, UserCheckQueryVariables>;