export interface SyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: Date;
    type: string;
}


export interface RestaurantObj{
    '읍면동' : string,
    '소  재  지' : string,
    '전화번호' : string,
    '업  소  명' : string
}

interface listType{
    [key:string] : RestaurantObj
}

export type keys = {
    [key:string] : listType
}

export type listObj = {
    [key:string] : Array<RestaurantObj>
}
