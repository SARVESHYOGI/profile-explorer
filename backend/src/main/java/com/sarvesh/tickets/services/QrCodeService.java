package com.sarvesh.tickets.services;

import com.sarvesh.tickets.domain.entities.QrCode;
import com.sarvesh.tickets.domain.entities.Ticket;
import java.util.UUID;

public interface QrCodeService {

    QrCode generateQrCode(Ticket ticket);

    byte[] getQrCodeImageForUserAndTicket(UUID userId, UUID ticketId);
}