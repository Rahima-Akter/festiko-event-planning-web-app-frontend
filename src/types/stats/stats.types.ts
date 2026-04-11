export interface IAdminStats {
  totalEvents: number;
  totalParticipants: number;
  totalUsers: number;
  totalSoftDeletedUsers: number;
  totalPaidParticipants: number;
  totalRevenue: number;
}

export interface IUserStats {
  totalCreatedEvents: number;
  totalJoinedEvents: number;
  totalInvitationsReceived: number;
  totalInvitationsAccepted: number;
  totalPaidAmount: number;
}