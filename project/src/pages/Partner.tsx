import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { partnerData } from '../data/partners';
import VViewPartner from '../components/partners/VViewPartner';
import BOEPartner from '../components/partners/BOEPartner';
import ArtomePartner from '../components/partners/ArtomePartner';
import ClassVRPartner from '../components/partners/ClassVRPartner';
import HTCVivePartner from '../components/partners/HTCVivePartner';
import KramerPartner from '../components/partners/KramerPartner';
import DefaultPartner from '../components/partners/DefaultPartner';

function Partner() {
  const { name } = useParams();
  const navigate = useNavigate();
  const partner = name ? partnerData[name as keyof typeof partnerData] : null;

  useEffect(() => {
    if (!partner) {
      navigate('/partners');
      return;
    }

    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 200);
    });
  }, [partner, navigate]);

  if (!partner) return null;

  const components = {
    'vview': VViewPartner,
    'boe': BOEPartner,
    'artome': ArtomePartner,
    'classvr': ClassVRPartner,
    'htc-vive': HTCVivePartner,
    'kramer': KramerPartner
  };

  const PartnerComponent = components[name as keyof typeof components] || DefaultPartner;
  return (
    <PartnerComponent partner={partner} />
  );
}

export default Partner;