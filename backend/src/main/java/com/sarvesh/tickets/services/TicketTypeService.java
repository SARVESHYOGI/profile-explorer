package com.sarvesh.tickets.services;

import com.sarvesh.tickets.domain.entities.Ticket;
import java.util.UUID;

public interface TicketTypeService {
    Ticket purchaseTicket(UUID userId, UUID ticketTypeId);
}