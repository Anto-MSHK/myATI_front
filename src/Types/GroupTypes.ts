export type GroupStateResponseT = {
    status: string,
    result: GroupStateT,
 };

 export type GroupsStateResponseT = {
    status: string;
    result: GroupStateT[];
}
 
export type GroupMessagesT = {
    messages?: {
		title: string, 
		body: string, 
		sender: string, 
		time: string
	}[],
}

export type GroupsStateT = {
    _id: string;
    name: string;
   
}[];

export type GroupStateT = {
    _id: string;
    name: string;
    elder?: string;
    messages?: GroupMessagesT;
};

