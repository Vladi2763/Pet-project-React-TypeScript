export type GridCell = {
    width: number | null,
    height: number | null,
    top: number | null,
    left: number | null,
    src?: string
}

export type GridRow = Array<GridCell>;

export type Grid = Array<GridRow>;

export type TemplatesSlice = {
    items: Array<Grid>,
    loading: boolean,
    originalSelectedTemplate: Grid | null,
    selectedTemplate: Grid | null,
    error: any,
    selectedGridIndex: number | null
}

export type TeamType = {
    avatar: string,
    createdAt: string,
    id?: string,
    name: string
}

export type TeamsType = {
    teams: Array<TeamType>,
    selectedTeam: TeamType | null,
    loading: boolean,
    error: any
}

export type DeleteHandlerOptions = {
    title: string,
    name: string,
    id: string,
    func: () => void,
    memberId: string | null
}

export type DeleteHandler = (options: DeleteHandlerOptions) => void;

export type TeamProps = {
    team: TeamType,
    id: string,
    title: string,
    selectTeam: ((team: TeamType) => any),
    modalDelete: DeleteHandler
}

export type TeamsProps = {
    modalClick: (title: string) => void;
    modalDelete: DeleteHandler;
}

export type MemberProps = {
    selectMember: any,
    member: any,
    avatar: string,
    name: string,
    title: string,
    modalDelete: DeleteHandler
}

export type MembersProps = {
    modalMemberClick: (title: string) => void,
    modalDelete: DeleteHandler
}

export type DeleteModalProps = {
    title: string,
    name: string,
    func: (id: string) => void,
    data: any,
    closeModal: (boolean) => void
}